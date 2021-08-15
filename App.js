import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { firebaseConfig } from './config';
import * as firebase from 'firebase'

import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Detail } from './components/Detail';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default function App() {
  const [auth, setAuth] = useState(null)
  const [data, setData] = useState()
  const db = firebase.firestore()
  // useEffect( () => {
  //   if( auth ) {
  //     navigation.navigate("Home")
  //   }
  // }, [auth])
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setAuth(true)
    }
    else {
      setAuth(false)
    }
  })

  useEffect(() => {
    if (!data) {
      readData()
    }
  })
  const addData = (data) => {
    return new Promise((resolve, reject) => {
      if (!auth) {
        reject("User not authenticated")
      }
      else {
        const ref = db.collection('users').doc(auth.uid).collection('read')
        ref.add(data)
          .then(() => { resolve(true) })
          .catch((error) => { reject(error) })
      }
    })
  }

  const HandleSignup = (email, password) => {
    // console.log( email, password )
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response)
        setAuth(true)
      })
      .catch((error) => console.log(error))
  }

  const HandleSignout = () => {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          setAuth(false)
          resolve(true)

        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  }
  const readData = () => {
    let books = []
    db.collection('books').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let book = doc.data()
          book.id = doc.id
          books.push(book)
        })
      })
    setData(books)
  }
  const HandleSignin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response)
        setAuth(true)
      })
      .catch((error) => console.log(error))
  }

  //const ToggleSignup = () => {
  //if( signup === true ) {
  //  setSignup( false )
  // }
  // else {
  //   setSignup( true )
  // }
  // }

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signin" >
          {(props) => <Signin {...props} handler={HandleSignin} auth={auth} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => <Signup {...props} handler={HandleSignup} auth={auth} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Detail" component={Detail} />


        <Stack.Screen
          name="Home"
          //component={Home}
          options={{ title: "Borrow Record  App" }}
        >
          {(props) => <Home {...props}
            signout={HandleSignout} listdata={data}
            auth={auth} 
            add={addData} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

