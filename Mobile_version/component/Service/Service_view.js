import React, { useState, useEffect, Fragment } from "react";
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, Button, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function Service({ navigation }) {

    //   const App = () => {
    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
            <View style={styles.container}>
		<TouchableOpacity style={{
                        alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '34%', height: '15%', borderRadius: 100 / 4, position: 'absolute',
                        left: '8%', top: '20%'
                    }}onPress={() => navigation.navigate("Service2", { page: "service_page" })}>
                        <Image source={require('../../assets/Spotify.png')} style = {{ width: 200, height: 100 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '34%', height: '15%', borderRadius: 100 / 4, position: 'absolute',
                    left: '60%', top: '20%'
                }}>
                    <Image source={require('../../assets/youtube.png')} style = {{ width: 200, height: 100 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '34%', height: '15%', borderRadius: 100 / 4, position: 'absolute',
                    left: '8%', top: '40%'
                }}>
                    <Image source={require('../../assets/gmail.png')} style = {{ width: 130, height: 80 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '34%', height: '15%', borderRadius: 100 / 4, position: 'absolute',
                    left: '60%', top: '40%'
                }}>
                    <Image source={require('../../assets/Onedrive.png')} style = {{ width: 120, height: 80 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '34%', height: '15%', borderRadius: 100 / 4, position: 'absolute',
                    left: '8%', top: '60%'
                }}>
                    <Text></Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: '34%', height: '15%', borderRadius: 100 / 4, position: 'absolute',
                    left: '60%', top: '60%'
                }}>
                    <Text></Text>
                </TouchableOpacity>
	    </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    // circle: {
    //     position: 'absolute',
    //     top: '15%',
    //     width: '100%',
    //     height: '65%',
    //     borderRadius: 100 / 4,
    //     backgroundColor: "#C0C0C0",
    // },
    // // container: {
    //   flex: 1,
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-around',
    //   alignItems: 'center',
    //   height:'100%',
    //   textAlign: 'center',
    // },
    // background: {
    //   flex: 1,
    //   justifyContent: 'center',
    // },
    // image: {
    //     marginTop: -80,
    //     marginHorizontal: 100,
    // },
    // generate: {
    //   backgroundColor: 'black',
    //   padding: 10,
    //   width: '100%',
    //   alignItems:'center',
    // }
});

//  <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" style={styles.background}>
                //  <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        //         <Fragment>
        //         <View style={{
        //             width: 80,
        //             height: 80,
        //             backgroundColor: 'red',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //         }}>
        //             <Text>1</Text>
        //         </View>
        //         <View style={{
        //             width: 80,
        //             height: 80,
        //             backgroundColor: 'green',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //         }}>
        //             <Text>1</Text>
        //         </View>
        //         <View style={{
        //             width: 80,
        //             height: 80,
        //             backgroundColor: 'skyblue',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //         }}>
        //             <Image resizeMode='center' source={require('../../assets/Logo3.png')} />
        //         </View>
        //     </Fragment>
        // </SafeAreaView>
