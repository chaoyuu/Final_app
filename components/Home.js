import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Modal,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker'
import { Logout } from './Logout';
import { event } from 'react-native-reanimated';
export function Home (props) {
  const [user,setUser] = useState()
  const [author, setAuthor] = useState()
const [title,setTitle] = useState()
const [date,setDate] = useState()
  const navigation = useNavigation()
  navigation.setOptions({
    headerRight:() => (
      <Logout handler={signOut}/>

    )
  })
  const signOut =() => {

    props.signout()
    .then( (result) => {
      if( result=== true){
        navigation.reset({ index: 0, routes: [ {name: "Signin"} ]})
      }
    })
    .catch((error) => console.log(error))
  
  }
  const Greeting = () => {
    if(!user) {
      return null
    }
    else{
      return <Text>{user.email}</Text>
    }
  }
  const handleDate = (event,selectedDate) => {
    
    setDate( selectedDate)
  }
  const handleSubmit = () => {
    if( title && author && date ) {
      let book = new Object()
      book.title = title
      book.author = author
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
  return(
    
    <View style={HomeStyles.pageContainer}>
      <Greeting/>
      <Text>Contact Us with chaoyu@gmail.com</Text>
      <Text>Add a book you have read</Text>
      <Text>Title</Text>
      <TextInput style={HomeStyles.input} onChangeText={ val =>setTitle(val) }/>
      <Text>Author</Text>
      <TextInput style={HomeStyles.input} onChangeText={ val =>setAuthor(val) }/>
      <TextInput/>
      <Text>Started date</Text>
      {/*<TextInput style={HomeStyles.input} onChangeText={ val =>setDate(val) }/>*/}
      <DateTimePicker
    testID="dateTimePicker"
    value={new Date()}
    is24Hour={true}
    display="default"
    onChange={handleDate}
  />
      <TouchableOpacity style={HomeStyles.button}>
        <Text style={HomeStyles.buttonText}>Add book</Text>
        </TouchableOpacity>     
    
      {/*<Text style={{textAlign:'center'}}>Home</Text>*/}
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




