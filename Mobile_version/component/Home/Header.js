import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Body from './Body.js'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "black", height: "8%", width: "100%" }}>
        <Image style={{ width: 120, height: 50 }} source={require('../../assets/logo_landing.png')} />
      </View>
      <Body />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});

// export default Header