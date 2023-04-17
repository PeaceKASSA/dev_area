import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Image, ImageBackground, Button, TouchableWithoutFeedback} from 'react-native';

export default function Body({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.background}>
          <View style={styles.image}>
            <Image resizeMode='center' source={require('../../assets/Logo3.png')}/>
          </View>
          <Button title="Login" type="solid" 
            onPress={() => navigation.navigate("Login", { page: "login_page" })}
          />
          <StatusBar style="auto" />
          <Button title="Register" type="solid" 
            onPress={() => navigation.navigate("Register", { page: "register_page" })}
          />
      </ImageBackground>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height:'100%',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
      marginTop: -80,
      marginHorizontal: 100,
  },
  generate: {
    backgroundColor: 'black',
    padding: 10,
    width: '100%',
    alignItems:'center',
  }
});

// export default Body