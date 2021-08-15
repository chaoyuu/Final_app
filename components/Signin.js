import React, {useState,useEffect} from 'react';
import { Button,StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function Signin ( props ) {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [validEmail,setValidEmail] = useState()
  const [validPassword,setValidPassword] = useState()

  const navigation = useNavigation()

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

  const SignIn = () => {
    props.handler( email, password )
  }

  
  return(
    <View style={SigninStyles.container}>
      <Text style={SigninStyles.heading}>If you have a account ,please sign in to your account</Text>
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
      onPress={ SignIn }
      disabled={ (!validEmail || !validPassword) ? true:false}
      >
        <Text style={SigninStyles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate("Signup") }>
        <Text style={{textAlign:'center',}}>Sign up for an account</Text>
      </TouchableOpacity>
      <Button
   title="Go to Signup"
   onPress={() => navigation.navigate('Signup')}
 />

    </View>
  )
}

const SigninStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 30,
    backgroundColor: 'yellow',
    paddingVertical:20,
    paddingHorizontal: 10,
    borderRadius:10,
  },
  heading: {
    fontSize: 22,
    fontWeight:"500",
    marginVertical: 30,
  },
  label: {
    fontWeight: "500",
  },
  input: {
    fontSize: 18,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius:4,
    paddingHorizontal:5,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#000000',
    padding: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    padding: 8,
    marginVertical: 20,
  }
})