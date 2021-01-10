import React, { Component, useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground } from "react-native";
import { withOrientation } from "react-navigation";
import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database"
import * as  ScreenOrientation from "expo-screen-orientation";


export default function Feedback2({ navigation }) {

    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.LANDSCAPE
        ScreenOrientation.lockAsync(lock);
        firebase.database().ref('users/' + currentuser.uid + '/feedback').once('value', function (snapshot) {


            snapshot.forEach(function (snap) {
                var item = snap.val();
                //item.key = snap.key;
                console.log("**************************");
                console.log(item.text);
                console.log("**************************");
                // setReturnArray(returnArray.concat(item));
                setReturnArray(oldArray => [...oldArray, item.text]);


            });

            // this.setState({ dataArray: returnArray })

        });
        console.log('aaaaaaaaaaaaaaaaaaa')
        console.log(returnArray)
        //console.log(returnArray2)
    }, []);

    const currentuser = firebase.auth().currentUser;
    const [returnArray, setReturnArray] = useState([])
    const returnArray2 = ['aaaa', 'ssss', 'hhh'];

    return (
        <ImageBackground style={styles.container} source={require('.././assets/.new/static_bg.png')}>
            <Text style={styles.text}>MY FEEDBACK</Text>
            <View style={styles.maincontainer}>

                <ScrollView style={styles.box}>


                    {returnArray.map((item, key) => (
                        <Text key={key} style={styles.submit}  > { item} </Text>)
                    )}


                </ScrollView>






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
        backgroundColor: 'pink',
        // opacity:0.9,

    },

    maincontainer: {
       // marginLeft: 150,
        //marginTop: 10,


    },

    text: {
        // fontSize: 30,
        // fontWeight: "bold",
        // fontFamily: 'notoserif',
        // marginLeft: 230,
        // marginBottom: 20,

        flex: 1,
        fontSize: 32,
        color: 'white',
        fontWeight: "bold",
        alignSelf: 'center',
        top: 30,


    },


    box: {
   
        color: 'white',
        backgroundColor: 'rgba(240,240,240,0.2)',
        height: 240,
        width: 420,


        fontSize: 18,
        paddingTop: 8,
        paddingLeft: 8,
        borderRadius: 12,

        marginBottom: 32,
        marginLeft: 16,
        alignSelf:'center',

        color: 'white',


    },

    holder: {

        width: 150,
        height: 50,
        backgroundColor: 'black',
        marginLeft: 80,

        borderWidth: 5,
        borderColor: 'white',
        marginTop: 10,

        borderRadius: 15,



    },

    submit: {

        color: 'white',
        fontWeight: "bold",
        fontSize: 27,
        backgroundColor: 'transparent',
        paddingLeft: 12,
        borderColor:'black',
        borderWidth:5,

    }

});