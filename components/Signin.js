import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function Signin ( props ) {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [validEmail,setValidEmail] = useState()
  const [validPassword,setValidPassword] = useState()

  useEffect( () => {
    
    const emailNoSpaces = email.split(' ').join('').length
    if( email.length >= 5 && email.length === emailNoSpaces) {
      setValidEmail( true )
    }
    else {
      setValidEmail( false )
    }
    if( password.length >= 6 ) {
      setValidPassword( true )
    }
    else {
      setValidPassword( false )
    }
  
  }, [email,password])

  useEffect( () => {
    if( props.auth ) {
      navigation.reset({ index: 0, routes: [ {name: "Home"} ]})
    }
  }, [ props.auth ])

  const navigation = useNavigation()
  return(
    <View>
      <Text style={SigninStyles.heading}>Sign in to your account</Text>
      <Text>Email</Text>
      <TextInput 
      style={SigninStyles.input}
      onChangeText={ (val) => setEmail(val) }
      />
      <Text>Password</Text>
      <TextInput 
      style={SigninStyles.input} 
      secureTextEntry={true}
      onChangeText={ (val) => setPassword(val) }
      />
      <TouchableOpacity 
      style={(!validEmail || !validPassword) ? SigninStyles.buttonDisabled : SigninStyles.button} 
      onPress={ () => props.handler }
      disabled={ (!validEmail || !validPassword) ? true:false}
      >
        <Text style={SigninStyles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate("Signup") }>
        <Text>Sign up for an account</Text>
      </TouchableOpacity>
    </View>
  )
}

const SigninStyles = StyleSheet.create({
  heading: {
    fontSize: 22,
  },
  input: {
    fontSize: 18,
    borderColor: '#cccccc',
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#000000',
    padding: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    padding: 5,
    marginVertical: 10,
  }
})