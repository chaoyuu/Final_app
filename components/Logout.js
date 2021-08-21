import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Logout( props ) {
  const PressHandler = () => {
    props.handler()
  }
  return (
    <TouchableOpacity style={styles.button} onPress={ PressHandler}>
      <Text>Sign Out</Text>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create( {
  button : {
    backgroundColor: "yellow",
  }
})