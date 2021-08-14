import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

export function Signup ( props ) {
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const[validEmail,setValidEmail] = useState(false)
  const[validPassword,setValidPassword] = useState(false)

  const navigation = useNavigation()

  useEffect( () => {
    if( props.auth ) {
      navigation.reset({ index: 0, routes: [ {name: "Home"} ]})
    }
  }, [props.auth])

  const HandleEmail = ( emailVal ) => {
    //validate email
    if( emailVal.indexOf('@') > 0 ) {
      setValidEmail( true )
    }
    else {
      setValidEmail( false )
    }
    setEmail( emailVal )
  }
  
  const HandlePassword = ( passwordVal ) => {
    //validate password
    if( passwordVal.length >= 8 ) {
      setValidPassword( true )
    }
    else {
      setValidPassword( false )
    }
    setPassword( passwordVal )
  }

  const HandleSubmit = () => {
    props.handler( email, password )
  }
  return(
    <View>
      <Text style={SignupStyles.heading}>Sign up for an account</Text>
      <Text>Email</Text>
      <TextInput 
      style={SignupStyles.input} 
      onChangeText={ (val) => HandleEmail(val)  }
      />
      <Text>Password</Text>
      <TextInput 
      style={SignupStyles.input} 
      secureTextEntry={true}
      onChangeText={ (val) => HandlePassword(val) }
      />
      <TouchableOpacity 
      style={(validEmail && validPassword) ? SignupStyles.button : SignupStyles.buttonDisabled} 
      onPress={HandleSubmit}
      disabled={ (validEmail && validPassword) ? false : true }
      >
        <Text style={SignupStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate("Signin") }>
        <Text>Sign in to your account</Text>
      </TouchableOpacity>
    </View>
  )
}

const SignupStyles = StyleSheet.create({
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