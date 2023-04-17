import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, Button, TouchableWithoutFeedback, TouchableOpacity, error, stateUpdater } from 'react-native';
import { StatusBar } from "expo-status-bar";


const isValidObjField = (obj) => {
  return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('')
  }, 2500);
}

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value)
}

const SignupForm = () => {

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [error, setError] = useState('')
  const { name, email, password, confirm_password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value })
  };

  const isValidForm = () => {
    // Object.values(userInfo).every(value => value.trim())
    // if (!isValidObjField(userInfo)) return updateError('Required all field', setError)
    if (!isValidObjField(userInfo)) return updateError('Required all field', setError)
    if (!name.trim() || name.length < 5) return updateError('Invalid name!', setError)

    if (!isValidEmail(email)) return updateError('Invalid email!', setError)
    if (!password.trim() || password.length < 5) return updateError('Password is less then 5 characters!', setError)
    if (password !== confirm_password) 
      return updateError('Password is less then 5 characters!', setError)
    
    // return true;
  }
  const submitForm = () => {
    if (isValidForm()) {

    }
  }
  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <View style={styles.container}>

        {error ? (<Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text>) : null}

        {/* <View style={styles.image}> */}
          {/* <Image resizeMode='center' source={require('../../assets/Logo3.png')} /> */}
          <Image source={require('../../assets/Logo3.png')} style = {{ width: 100, height: 100 }}></Image>

        {/* </View> */}
        <StatusBar style="auto" />

        <View style={styles.inputView}>
          <TextInput
            value={name}
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            // onChangeText={(name) => setEmail(name)}
            onChangeText={(value) => handleOnChangeText(value, 'name')}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={email}
            style={styles.TextInput}
            autoCapitalize='none'
            placeholder="Email"
            placeholderTextColor="#003f5c"
            // onChangeText={(email) => setEmail(email)}
            onChangeText={(value) => handleOnChangeText(value, 'email')}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={password}
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            // onChangeText={(password) => setPassword(password)}
            onChangeText={(value) => handleOnChangeText(value, 'password')}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            value={confirm_password}
            style={styles.TextInput}
            placeholder="ConfirmPassword"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            // onChangeText={(confirm_password) => setConfirm_Password(confirm_password)}
            onChangeText={(value) => handleOnChangeText(value, 'confirm_password')}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={submitForm} style={styles.loginBtn}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  // image: {
  //   marginBottom: 40,
  //   width: "10%",
  //   height: '15%',
  // },

  inputView: {
    backgroundColor: "skyblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  image: {
    marginTop: -80,
    marginHorizontal: 100,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
  },
});

export default SignupForm