import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground } from "react-native";
import { withOrientation } from "react-navigation";

export default function About({navigation}){



{}

    return(

        <ImageBackground style= {styles.container} source = {require('.././assets/main_images/aboout3.png')}>
           <Text style = {styles.text}>
            ABOUT </Text>
        
            <View style = {styles.maincontainer}>
            

            <Text style = {styles.box}>
                This app is a visual story app
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
        
        flex: 1,
        resizeMode: 'center', 
        backgroundColor:'pink',
       // opacity:0.9,
        
    },

    maincontainer:{
        marginLeft:150,
       
        

    },

    text:{
        fontSize: 30,
        fontWeight: "bold",
        fontFamily:'notoserif',
        marginLeft:250,
        marginBottom:20,
        

    },


    box:{
        backgroundColor: 'black',
        
        height: 250,
        width: 310,
        color: 'black',
       
        fontSize: 17,
        paddingTop: 15,
        paddingLeft:15,
        borderRadius: 15,
        
        borderColor: 'white',
        marginLeft:0,
        borderWidth:5,
        color:'white',
       
        
    },

    

 });