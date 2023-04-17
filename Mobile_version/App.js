import { StatusBar } from 'expo-status-bar';
import {Plateform, StyleSheet, Text, View, Image } from 'react-native';
import Header from './component/Home/Header.js'
// import Login from './component/Login/login.js'
import SigninForm from './component/Login/login.js';
import SignupForm from './component/Register/Register.js'
import Body from './component/Home/Body.js';
import Service from './component/Service/Service_view.js';
import Service2 from './component/Service/Service_view2.js';
// import Login from './component/Login/login.js'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
    // <SignupForm />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Body}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Register"
          component={SignupForm}
          options={{title: 'Register'}}
        />
        <Stack.Screen 
          name="Login"
          component={SigninForm}
          options={{title: 'Login'}}
        />
        <Stack.Screen 
          name="Service2"
          component={Service2}
          options={{title: 'Service2'}}
        />
        <Stack.Screen 
          name="Service"
          component={Service}
          options={{title: 'Service'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});