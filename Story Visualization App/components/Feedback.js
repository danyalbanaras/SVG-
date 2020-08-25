import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground } from "react-native";
import { withOrientation } from "react-navigation";

export default function Feedback({navigation}){

const [feedbacktext, setFeedbacktext] = useState('');

const feedbacktextHandler = text => {
    setFeedbacktext(text);

}

const submit= () => {
    if(feedbacktext != "")
    {
    alert("Feedback Submitted")
    navigation.navigate('Main');
    }
    else{
        alert("Fields Empty")
    }
}

{}

    return(
        <ImageBackground style= {styles.container} source = {require('.././assets/aboutimage.jpg')}>
            
            <View style = {styles.maincontainer}>
            <Text style = {styles.text}>
            Feedback </Text>
            
            <TextInput
               style={styles.box}
               placeholder="Enter Feedback"
               placeholderTextColor="#aeaeae"
               onChangeText={feedbacktextHandler}
            /> 
            
            <TouchableHighlight 
            style={styles.holder} 
            onPress={submit}
            underlayColor='#ffe0f3'
            >
			    <Text style={styles.submit}> Submit </Text>
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
        backgroundColor: 'transparent',
        
        height: 150,
        width: 180,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 17,
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'transparent',
        marginLeft:0,
       
        
    },

    holder: {
        
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: 'blue',
        marginLeft:0,
        width:80,
        
       
      },

      submit:{
        
        color: 'white',
        fontWeight: "bold",
        fontSize: 17,
        backgroundColor: 'transparent',
        
      }

 });