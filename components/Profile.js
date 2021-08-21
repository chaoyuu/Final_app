import React, { useState, useEffect } from 'react';
import { Button,SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
//import React, { useState, useEffect } from 'react';
export function Profile(props) {
    const [borrower, setAuthor] = useState()
    const navigation = useNavigation()

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);





    return (
        <SafeAreaView>
            <View style={ProfileStyles.container}>
                <Text>you can enter your  borrower information</Text>
                <Text>Book Number </Text>
                <TextInput
                    style={ProfileStyles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter your book type"
                    keyboardType="numeric"
                />


                <Text>Book Name </Text>
                <TextInput
                    style={ProfileStyles.input}
                    onChangeText={onChangeText} />


                <Text>Borrower </Text>

                <TextInput
                 style={ProfileStyles.input} 
                 onChangeText={val => 
                 setAuthor(val)} />
               

            </View>
            <Button
  title="Go to Home"
  onPress={() => navigation.navigate('Home')}
/>
        </SafeAreaView>




    )
}

const ProfileStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 30,
        backgroundColor: '#e8ffe9',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    heading: {
        fontSize: 22,
    },
    input: {

        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,

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






























































































