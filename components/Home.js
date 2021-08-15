import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker'
import { Logout } from './Logout';
import { Profiler } from './Profile';
import { event } from 'react-native-reanimated';
import { installReactHook } from 'react-native/Libraries/Performance/Systrace';
export function Home(props) {
  const [user, setUser] = useState()
  const [borrower, setAuthor] = useState()
  const [bookname, setTitle] = useState()
  const [date, setDate] = useState()
  const navigation = useNavigation()





  useEffect(() => {
    if (props.auth) {
      setUser(props.auth)
    }
    else {
      setUser(null)
    }
    navigation.setOptions({
      headerLeft: props => <Logout {...props} handler={signOut} />
    })





  })



  const signOut = () => {

    props.signout()
      .then((result) => {
        if (result === true) {
          navigation.reset({ index: 0, routes: [{ name: "Signin" }] })
        }
      })
      .catch((error) => console.log(error))

  }
  const Greeting = () => {
    if (!user) {
      return null
    }
    else {
      return <Text>{user.email}</Text>
    }
  }
  const handleDate = (event, selectedDate) => {

    setDate( selectedDate)
  }
  
  const handleSubmit = () => {
    if( bookname && borrower && date ) {
      let book = new Object()
      book.bookname = bookname
      book.borrower = borrower
      book.date = date
      props.add( book )
      .then( (result) => console.log(result))
      .catch( (error) => console.log(error) )
    }
    else {
      // error message -- no data to add
      console.log( 'no data', author, title, date )
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (

    <View style={HomeStyles.pageContainer}>
      <Greeting />
      <Text>If you want to any help please contact Us with chaoyu@gmail.com</Text>
     
      <Text>Borrow Book name</Text>
      <TextInput style={HomeStyles.input} onChangeText={val => setTitle(val)} />
      <Text>Borrower</Text>
      <TextInput style={HomeStyles.input} onChangeText={val => setAuthor(val)} />
      <TextInput />
      <Text>Borrow date</Text>
      {/*<TextInput style={HomeStyles.input} onChangeText={ val =>setDate(val) }/>*/}
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date()}
        is24Hour={true}
        display="default"
      onChange={handleDate}
      />
      <TouchableOpacity style={HomeStyles.button} onPress={handleSubmit}>
   <Text style={HomeStyles.buttonText}>Borrow Book</Text>
 </TouchableOpacity>
     
     
      {/*<Text style={{textAlign:'center'}}>Home</Text>*/}
      <Button
        title="Go to Profile"


        onPress={() => navigation.navigate('Profile')}


      />
       <Button
   title="Go to Detail"
   onPress={() => navigation.navigate('Detail')}
 />


      <FlatList />
    </View>
  )

}

const HomeStyles = StyleSheet.create({
  pageContainer: {
    minHeight: 300,
    backgroundColor: 'lightblue',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    color:'red'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
  },
})





