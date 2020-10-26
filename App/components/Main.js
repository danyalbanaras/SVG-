import React, { Component, useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, PickerIOSComponent, Thumbnail } from "react-native";
import { withOrientation } from "react-navigation";
import LandscapeView from 'react-native-landscape-view';
import { ScreenOrientation } from "expo";
import { TouchableOpacity } from "react-native";
//import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
//import RecordScreen from 'react-native-record-screen';
//import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


//import ViewShot from "react-native-view-shot";
import { captureScreen } from "react-native-view-shot";


export default function Main({ navigation }) {

    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.LANDSCAPE
        ScreenOrientation.lockAsync(lock);



    });

    const [background, setBackground] = useState(require('.././assets/mainflatlist/background8.jpg'));














    const createstory = () => {

        navigation.navigate('CreateStory');
    }

    const oncapture = async () => {
        const dest = '.././assets/screenshot'
        captureScreen({
            format: "jpg",
            quality: 0.8
        }).then(
            async (uri) => {
                MediaLibrary.requestPermissionsAsync();

                let uriArray = uri.split("/");
                let nameToChange = uriArray[uriArray.length - 1];
                let renamedURI = uri.replace(
                    nameToChange, "NEW_NAME.png"
                );
                // console.log(uri);
                const asset = await MediaLibrary.createAssetAsync(uri);

                //****IMAGE UPLOAD TO SERVER *****/
                // // Upload the image using the fetch and FormData APIs
                // // ImagePicker saves the taken photo to disk and returns a local URI to it
                // let localUri = asset.uri;
                // let filename = localUri.split('/').pop();
                // console.log(filename);
                // // Infer the type of the image
                // let match = /\.(\w+)$/.exec(filename);
                // let type = match ? `image/${match[1]}` : `image`;
                // let formData = new FormData();
                // // Assume "photo" is the name of the form field the server expects
                // formData.append('photo', { uri: localUri, name: filename, type });

                // return await fetch('C://', {
                //     method: 'GET',
                //     body: formData,
                //     headers: {
                //         'content-type': 'multipart/form-data',
                //     },
                // });
                // console.log(asset.uri);
                // FileSystem.copyAsync(uri, renamedURI)
                //****IMAGE UPLOAD TO SERVER *****/
            },


            error => console.error("Oops, snapshot failed", error)
        );

    }

    const mystory = async () => {
        fetch("http://d6236ab6780a.ngrok.io?pictureName=lion.jpg&gifName=lion.gif",

            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //   body: JSON.stringify(AdminLoginBindingModel)
            })
            .then((res) => {

                return res.json();
            }).then((obj) => {
                //console.log(obj);
                setBackground(obj)
            });
    }

    const mystory2 = async () => {
        //fetch("http://d6236ab6780a.ngrok.io?pictureName=lion.jpg&gifName=lion.gif",
        fetch("http://9ca3876b35a1.ngrok.io/getresult", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                x: 0,
                y: 0
            })
        })
            .then(response => response.blob())
            .then(images => {
                // Then create a local URL for that image and print it 
                image = URL.createObjectURL(images)
                setBackground(image)
                console.log(image)
            }).catch(error => {
                console.error(error);
            });


    }

    const option = () => {

        navigation.navigate('Option');
    }

    { }

    return (
        <LandscapeView>
            <StatusBar hidden />

            <ImageBackground style={styles.container} source={background}>






                <View style={styles.menucontainer}>

                    {/* <Image source={require('file:///storage/emulated/0/DCIM/ReactNative-snapshot-image8263268481453102945.jpg')}/> */}


                    <TouchableOpacity
                        onPress={createstory}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>Create a Story</Text>

                    </TouchableOpacity>




                    <TouchableHighlight
                        onPress={mystory2}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>My Stories</Text>


                    </TouchableHighlight>





                    <TouchableHighlight
                        onPress={option}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>Options</Text>

                    </TouchableHighlight>

                </View>



            </ImageBackground>

        </LandscapeView>


    );

}


const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',

        flex: 1,
        resizeMode: 'center',
    },

    menucontainer: {
        marginTop: 120,
        marginLeft: 220,
        //marginBottom: 180,

    },


    menutext: {

        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: 'notoserif',
        color: '#fffff0',
        backgroundColor: 'pink',
        width: 200,
        paddingLeft: 20,
        paddingTop: 5,
        marginLeft: 10,

        borderRadius: 15,
        borderWidth: 4,
        borderColor: '#fffff0',
    },

    logo: {
        height: 100,
        width: 100,
        marginLeft: 130,
    },
    thumbnail: {

        justifyContent: 'center',
        // marginHorizontal: 5,

        borderColor: 'pink',
        borderWidth: 4,
        borderColor: 'pink',
        borderRadius: 300,



        height: 50,
        width: 50,
        backgroundColor: 'pink',



    },



});