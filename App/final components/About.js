import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, Dimensions } from "react-native";
import { withOrientation } from "react-navigation";

export default function About({ navigation }) {

    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width



    { }

    return (

        <ImageBackground style={styles.container} source={require('.././assets/.new/static_bg.png')}>
            <Text style={styles.text}>
                ABOUT </Text>

            <View style={styles.maincontainer}>


                <Text style={[styles.box, { height: height / 1.5, width: width / 2 }]}>
                    
                Story Visualization GAN  S.V.G ® is mobile application game, that enables the creation of engaing stories.
                Unlike traditional story makers, that give the user static 2D sprites, S.V.G ® takes it a step further.
                Leveraging the power of Generative Adversarial Networks, users can give life to images, providing for a 
                much richer and immersive experince. We appreciate you for downloading our app. 

                    {/* This app is a visual story app
                    that provides the feature of story writing
                    with the help of GANs. */}
             </Text>
            </View>
        </ImageBackground>
    );

}


const styles = StyleSheet.create({

    container: {

        justifyContent: 'center',
        flex: 1,
    
    },

    maincontainer: {
        flex: 4,

        alignSelf: 'center',



    },

    text: {
        flex: 1,
        fontSize: 32,
        color: 'white', 
        fontWeight: "bold",
        alignSelf: 'center',
        top: 20,
    },


    box: {

        color: 'white',
        backgroundColor: 'rgba(240,240,240,0.2)',
        fontSize: 18,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 12,
        textAlignVertical: "center",
        textAlign: "center",

    },



});