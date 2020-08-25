import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground } from "react-native";
import { withOrientation } from "react-navigation";

export default function About({navigation}){



{}

    return(

        <ImageBackground style= {styles.container} source = {require('.././assets/aboutimage.jpg')}>
           
        
            <View style = {styles.maincontainer}>
            <Text style = {styles.text}>
            About App </Text>

            <Text style = {styles.box}>
                This app is a visual stories app
                that provides the feature of story writing
                with the help of GANs.
             </Text>
            </View>
         </ImageBackground>
    );
     
}


const styles = StyleSheet.create({

    
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 30,
        flex: 1,
        resizeMode: 'center', 
    },

    maincontainer:{
        marginLeft:75,
        marginTop:180,

    },

    text:{
        fontSize: 24,
        fontWeight: "bold",
        fontFamily:'notoserif'
    },


    box:{
        height: 150,
        width: 180,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 11,
        padding: 8,
        marginLeft:0,
    }
 });