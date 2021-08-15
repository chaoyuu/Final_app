import React from 'react';
import { render } from 'react-dom';
import { Button, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

//{uri:file:// width:100,  height:100,scales:{1,2,3}}
export function Detail(props) {


  const PressHandler = () => {
    props.handler()
  }

  return (
    <View style={DetailStyles.container}>
      <View style={DetailStyles.detailContainer}>
        <Text Style={DetailStyles.title}>Welcome Borrower</Text>
        <Text Style={DetailStyles.subtitle}>Friday,May 18</Text>
        <Text Style={DetailStyles.description}>Have a good day!!!</Text>
      </View>
      <View style={DetailStyles.bookContainer}>
        <Image style={DetailStyles.image}
          source={require("../assets/Englishname.png")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/chinesestory.png")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/Winner.png")}
        />

        <View style={DetailStyles.bookDetailContainer}>
          <Text style={DetailStyles
            .borrowerName}>Luck</Text>
          <Text style={DetailStyles.borrowerBio}>Story book</Text>

        </View>


      </View>
      <View style={DetailStyles.bookContainer}>


        <Image style={DetailStyles.image}
          source={require("../assets/NightHouse.png")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/ghost.png")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/Bedstory.png")}
        />
         <View style={DetailStyles.bookDetailContainer}>
   <Text style={DetailStyles
     .borrowerName}>Scary</Text>
   <Text style={DetailStyles.borrowerBio}>Hooror book</Text>
 </View>
      </View>

      <View style={DetailStyles.bookContainer}>
       <Image style={DetailStyles.image}
         source={require("../assets/superboos.png")}
       />
       <Image style={DetailStyles.image}
         source={require("../assets/free.png")}
       />
       <Image style={DetailStyles.image}
         source={require("../assets/yiyangqianxi.png")}
       />
        <View style={DetailStyles.bookDetailContainer}>
  <Text style={DetailStyles
    .borrowerName}>Romance </Text>
  <Text style={DetailStyles.borrowerBio}>Romance book</Text>
</View>
     </View>
      
      {/*<Image
        style={{flex:1,
            height:null,resizeMode:"stretch"}}
        source={require('../assets/Englishname.png')}
      />*/}




    </View>

  )
}
const IMAGE_SIZE = 80;

const DetailStyles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff'


  },
  detailContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black'

  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4

  },
  subtitle: {

    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12


  },
  description: {
    fontSize: 13,
  },

  bookContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    backgroundColor: "grey"
  },
  borrowerName: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500',
  },
  borrowerBio: {
    fontSize: 13,

  },
  bookDetailContainer: {
    justifyContent: "center",

  }
});