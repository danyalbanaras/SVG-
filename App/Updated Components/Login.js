import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, Dimensions } from "react-native";
import { withOrientation } from "react-navigation";
import { Orientation } from "react-native-orientation";
import * as ScreenOrientation from "expo-screen-orientation";
import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database"

export default function Login({ navigation }) {


    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.POTRAIT
        ScreenOrientation.lockAsync(lock);
    });



    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const currentuser = firebase.auth().currentUser;






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

            firebase
                .default.auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    //AsyncStorage.setItem("key", "I like to save it.");
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user.emailVerified) {
                            navigation.navigate("Main");
                        }
                        else {
                            alert('This Email Address is not verified');
                        }
                    });

                })
                .catch(error => alert('Invalid Credentials'));

            //navigation.navigate('Main');



        }

    }




    const signup = () => {

        navigation.navigate('Signup');
    }

    const changePassword = () => {


        navigation.navigate('ChangePasswordB');
    }

    { console.log(email) }
    { console.log(password) }




    return (


        <ImageBackground style={styles.container} source={require('.././assets/.new/login.png')} imageStyle=
            {{ opacity: 0.5 }}>
            <StatusBar hidden />

            <View style={styles.empty}>
                
            </View>



            <View style={styles.logobox}>
                <Image
                    style={{ width: width / 1.5, height: height / 5 }}
                    source={require('.././assets/.new/svg_logo.png')}
                />
            </View>

            <View style={styles.mainontainer}>


                <TextInput
                    style={[styles.box, { width: width / 1.2, height: height / 14 }]}
                    selectionColor={'#008eb3'}
                    placeholder="Email"
                    placeholderTextColor="#aeaeae"
                    onChangeText={emailHandler}

                />

                <TextInput
                    style={[styles.box, { width: width / 1.2, height: height / 14 }]}
                    selectionColor={'#008eb3'}
                    placeholder="Password"
                    placeholderTextColor="#aeaeae"
                    onChangeText={passHandler}
                    secureTextEntry
                />


                <TouchableHighlight
                    style={[styles.holder, { width: width / 1.2, height: height / 14 }]}
                    onPress={login}
                    underlayColor='#ffe0f3'
                >
                    <Text style={styles.login}> Log in </Text>
                </TouchableHighlight>

            </View>


            <Text style={styles.divider}>____________________________</Text>

            <View style={styles.bottomcontainer}>

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
            </View>


        </ImageBackground>


    );

}


const styles = StyleSheet.create({
    container: {
        //alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 1,
        resizeMode: 'center',
    },

    empty: {
       flex: 1,
        

    },


    logobox: {
        flex: 2,
        alignSelf: 'center',
        //position:'absolute',
        //top: 140,
       justifyContent:'flex-end'

    },

    maincontainer: {
        flex: 2,
    },
    divider: {
        flex: 1,
        color: '#008eb3',
        alignSelf: 'center',
        top: 30,

    },
    bottomcontainer: {
        flex: 2,
        alignSelf: 'center'
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

        borderColor: 'pink',
        alignSelf: 'center',
        //marginHorizontal: 20,
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





    signup: {
        fontWeight: "bold",
        color: '#f4656d', //pink

    },

    changepassword: {
        fontWeight: "bold",
        color: '#f4656d', //pink

    },

    signuptext: {
        color: '#008eb3', //blue
    },

    changepasswordtext: {
        color: '#008eb3', //blue
    },



    signupContainer: {


        margin: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',


    },

    changepasswordContainer: {
        flexDirection: 'row',
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 20,
        //marginVertical: 10,


    },


    login: {

        color: 'white', //dark borwn
        fontWeight: "bold",
        fontSize: 18,
        margin: 10,
        padding: 2,
        paddingHorizontal: 60,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: 'transparent',
    },







});