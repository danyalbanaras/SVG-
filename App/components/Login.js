import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar } from "react-native";
import { withOrientation } from "react-navigation";
import { Orientation } from "react-native-orientation";
import {ScreenOrientation} from "expo";

export default function Login({ navigation }) {


    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.PORTRAIT
        ScreenOrientation.lockAsync(lock);
     });


    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');






    const emailHandler = text => {
        setEmail(text);

    }

    const passHandler = text => {
        setPass(text);
    }


    const login = () => {
        if (email != "" && password != "") {
            console.log('login');
            console.log(email);
            console.log(password);

            fetch("http://192.168.1.8:3000/user/user/email", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),

            })
                .then((response) => response.text())


                .catch((error) => {
                    console.error(error);
                });

            navigation.navigate('Main');



        }

    }


    //const login = () => {


    //if(email != "" && password != "" ){
    //  if(email == "danyal@gmail.com" && password == "1234" ){
    //    navigation.navigate('Main');

    //}
    //else{
    //  alert("Invalid Credentials")
    //}
    // }

    //else{
    //alert("Fields Empty")
    //}
    //}

    const signup = () => {

        navigation.navigate('Signup');
    }

    const changePassword = () => {


        navigation.navigate('ChangePassword');
    }

    { console.log(email) }
    { console.log(password) }




    return (


        <ImageBackground style={styles.container} source={require('.././assets/login2.jpg')}>
            <StatusBar hidden />



            <View style={styles.logobox}>
                <Image
                    style={styles.logo}
                    source={require('.././assets/svg_logo.png')}
                />
            </View>


            <TextInput
                style={styles.box}
                placeholder="Email"
                placeholderTextColor="#aeaeae"
                onChangeText={emailHandler}

            />

            <TextInput
                style={styles.box}
                placeholder="Password"
                placeholderTextColor="#aeaeae"
                onChangeText={passHandler}
                secureTextEntry
            />


            <TouchableHighlight
                style={styles.holder}
                onPress={login}
                underlayColor='#ffe0f3'
            >
                <Text style={styles.login}> Log in </Text>
            </TouchableHighlight>

            <View style={styles.centerContent}>
                <Text style={styles.divider}>______________________________________</Text>
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.signuptext}> Don't have an account? </Text>
                <TouchableHighlight
                    onPress={signup}
                    underlayColor='rgba(0, 0, 0, 0)'>

                    <Text style={styles.signup}>Sign up </Text>

                </TouchableHighlight>



            </View>

            <View style={styles.changepasswordContainer}>
                <Text style={styles.changepasswordtext}> Forgot Password? </Text>
                <TouchableHighlight
                    onPress={changePassword}
                    underlayColor='rgba(0, 0, 0, 0)'>

                    <Text style={styles.changepassword}>Change Password </Text>

                </TouchableHighlight>
            </View>


        </ImageBackground>


    );

}


const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        
        flex: 1,
        resizeMode: 'center',
    },

    background: {
        flex: 1,
        resizeMode: 'cover',

    },

    signup: {
        fontWeight: "bold",
    },

    changepassword: {
        fontWeight: "bold",

    },

    signuptext: {
        //color:'#fdfdfd',
    },

    changepasswordtext: {
        //color:'#fdfdfd',
    },

    divider: {
        color: '#1fcdd3'

    },

    signupContainer: {
        flexDirection: 'row',
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,


    },

    changepasswordContainer: {
        flexDirection: 'row',
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,


    },

    box: {
        backgroundColor: 'transparent',
        height: 50,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 17,
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,

    },

    holder: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: '#fdfdfd',
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: 'black',


    },

    login: {

        color: 'white',
        fontWeight: "bold",
        fontSize: 17,
        margin: 10,
        padding: 2,
        paddingHorizontal: 60,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: 'transparent',
    },


    logo: {
        justifyContent: 'center',
        marginLeft: 0,
        margin: 'auto',
        width: 220,
        height: 73,


    },

    centerContent: {
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },

    logobox: {
        marginLeft: 50,
        margin: 30,
    }
});