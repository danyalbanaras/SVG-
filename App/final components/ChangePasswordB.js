import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, Dimensions } from "react-native";
import { Thumbnail } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { withOrientation } from "react-navigation";
import * as ScreenOrientation from "expo-screen-orientation";

import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database"



export default function ChangePasswordB({ navigation }) {

    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.PORTRAIT
        ScreenOrientation.lockAsync(lock);
    });

    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width

    const passHandler = text => {
        setEmail(text);

    }
    const confirmpassHandler = text => {
        setConfirmPassword(text);
    }

    const changepassword = () => {


        if (email != "") {

            firebase.auth().sendPasswordResetEmail(email)
                .then(function (user) {
                    alert('Please check your email...')
                    navigation.navigate('Login');
                }).catch(function (e) {
                    alert("The user doesn't exist")
                })




        }

        else {
            alert("Please enter a valid email address")
        }
    }

    { }



    return (

        <ImageBackground style={styles.container} source={require('.././assets/.new/login.png')} imageStyle=
            {{ opacity: 0.5 }}>

            <StatusBar hidden />

            <View style={styles.logobox}>
                <Image
                    style={{ width: width / 1.5, height: height / 5 }}
                    source={require('.././assets/.new/svg_logo.png')}
                />
            </View>

            <View style={styles.mainContainer}>


                <TextInput
                    style={[styles.box, { width: width / 1.2, height: height / 14 }]}
                    selectionColor={'#008eb3'}
                    placeholder="Email"
                    placeholderTextColor="#aeaeae"
                    onChangeText={passHandler}

                />





                <TouchableHighlight
                    style={[styles.holder, { width: width / 1.2, height: height / 14 }]}
                    onPress={changepassword}
                    underlayColor='#ffe0f3'
                >
                    <Text style={styles.changepassword}> Change Password</Text>
                </TouchableHighlight>

            </View>
            <View style={styles.centerContainer}></View>
            <View style={styles.bottomContainer}></View>



        </ImageBackground>
    );

}


const styles = StyleSheet.create({
    container: {
        //alignContent: 'center',
        justifyContent: 'center',

        flex: 1,
        resizeMode: 'center',
    },


    logobox: {
        flex: 3,
        alignSelf: 'center',
        //position:'absolute',
        top: 140,

    },

    mainContainer: {
        flex: 2,
        //bottom:35,
    },
    centerContainer: {
        flex: 1,


    },

    bottomContainer: {
        flex: 1,
    },

    logo: {
        // justifyContent: 'center',
        //marginLeft: 0,
        // margin: 'auto',
        // width: 220,
        //height: 73,


    },

    box: {
        //backgroundColor: 'transparent',
        //height: 50,
        //width:100,
        color: 'black',
        alignSelf: 'center',
        //marginHorizontal: 20,
        borderColor: 'pink',
        marginVertical: 10,
        fontSize: 17,
        padding: 8,
        borderRadius: 8,
        borderWidth: 2,
    

    },

    holder: {
        alignSelf: 'center',
        // borderWidth: 1,
        borderRadius: 8,
        // backgroundColor: '#fdfdfd',
        marginVertical: 10,
        //marginHorizontal: 20,
        // borderColor: '#f4656d',
        backgroundColor: '#f4656d',

    },
    changepassword: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 17,
        margin: 10,
        padding: 2,
        //paddingHorizontal: 60,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: 'transparent',
    },



});