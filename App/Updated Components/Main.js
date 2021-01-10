import React, { Component, useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground, StatusBar, BackHandler } from "react-native";
import LandscapeView from 'react-native-landscape-view';
import * as ScreenOrientation from "expo-screen-orientation";
import { TouchableOpacity } from "react-native";
import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database"
import { beginAsyncEvent } from "react-native/Libraries/Performance/Systrace";
const bg_new = '.././assets/.new/main_bg.gif';
const bg_old = '.././assets/main_images/mainbackground.jpg';
// DISABLE ALL LOGS
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs();
// DISABLE ALL LOGS

import { useFonts } from 'expo-font';


export default function Main({ navigation }) {


    useFonts({
        'Gloria': require('.././assets/fonts/GloriaHallelujah-Regular.ttf'),
    });

    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.LANDSCAPE
        ScreenOrientation.lockAsync(lock);
        

       
        


    });

    

    
    
    
    
    const [background, setBackground] = useState(require(bg_new));
    const currentuser = firebase.auth().currentUser;




    const createstory = () => {

        navigation.navigate('CreateStory');
    }

    



    const mystory = () => {
        navigation.navigate('MyStory');

    }

    const option = () => {
        //console.log(currentuser.email)
        navigation.navigate('Option');
    }

    const logout = async () => {
        const lock = ScreenOrientation.OrientationLock.PORTRAIT
        ScreenOrientation.lockAsync(lock);
        navigation.navigate('Login')
        await firebase.auth().signOut();

        // navigation.navigate('')
    }


    return (
        <LandscapeView>
            <StatusBar hidden />

            <ImageBackground style={styles.container} source={background}>






                <View style={styles.menucontainer}>




                    <TouchableHighlight
                        onPress={createstory}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>Create a Story</Text>

                    </TouchableHighlight>




                    <TouchableHighlight
                        onPress={mystory}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>My Stories</Text>


                    </TouchableHighlight>





                    <TouchableHighlight
                        onPress={option}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>Options</Text>

                    </TouchableHighlight>



                </View>
                <View style={styles.logoutcontainer}>
                    <TouchableHighlight
                        onPress={logout}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.logouttext}>Logout</Text>

                    </TouchableHighlight>
                </View>



            </ImageBackground>

        </LandscapeView>


    );
}


const styles = StyleSheet.create({
    container: {
        //alignContent: 'center',
        justifyContent: 'center',

        flex: 1,
        resizeMode: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menucontainer: {
        //marginLeft:  (Dimensions.get('window').width)/3,
        //marginTop:  (Dimensions.get('window').height)/3,

        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'flex-end',
        position: 'absolute',
        left: 10,
    },


    menutext: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 28,
        marginBottom: 16,
        fontFamily: 'Gloria',
        color: '#491d88',
        backgroundColor: 'rgba(240,240,240,0.6)',
        width: 280,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 8,

    },

    logoutcontainer: {
        flex: 1,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 10,
        bottom: 10,

    },


    logouttext: {
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 4,
        fontSize: 20,
        fontWeight: "bold",
        color: '#241822',
        backgroundColor: 'rgba(192,192,192,0.6)',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,

        // borderRadius: 8,
        // borderWidth: 2,
        borderColor: '#43b5a0',
        margin: 4,


    },

});