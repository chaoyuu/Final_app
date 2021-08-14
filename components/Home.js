import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export function Home (props) {
  return(
    <View style={HomeStyles.pageContainer}>
      <Text style={{textAlign:'center'}}>Home</Text>
    </View>
  )
}

const HomeStyles = StyleSheet.create({
  pageContainer: {
    minHeight: 300,
    backgroundColor: 'lightblue',
  }
})