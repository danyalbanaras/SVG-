import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground } from "react-native";
import { withOrientation } from "react-navigation";


export default function Main({navigation}){

const menu = () => {

    navigation.navigate('ChangePassword');
}

const feedback= () => {

    navigation.navigate('Feedback');
}

const about= () => {

    navigation.navigate('About');
}

const mystory= () => {

    alert("In Development")
}

const profile= () => {

    alert("In Development")
}

const createstory= () => {

    navigation.navigate('CreateStory');
}
{}

    return(

        <ImageBackground style= {styles.container} source = {require('.././assets/mainscreen.jpg')}>
           
        
           <View style= {styles.menucontainer }>
                
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
                onPress={feedback}
                underlayColor='rgba(0, 0, 0, 0)'>

			        <Text style={styles.menutext}>Feedback </Text>
                    
		        </TouchableHighlight>

                <TouchableHighlight 
                onPress={profile}
                underlayColor='rgba(0, 0, 0, 0)'>

			        <Text style={styles.menutext}>Profile</Text>
                    
		        </TouchableHighlight>

                <TouchableHighlight 
                onPress={about}
                underlayColor='rgba(0, 0, 0, 0)'>

			        <Text style={styles.menutext}>About </Text>
                    
		        </TouchableHighlight>

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

    menucontainer:{
        marginLeft:125,
        marginBottom:180,

    },
    menutext:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom:10,
        fontFamily:'notoserif'
    }

    
 });