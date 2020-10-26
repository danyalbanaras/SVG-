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
        <ImageBackground style= {styles.container} source = {require('.././assets/main_images/aboout3.png')}>
            <Text style = {styles.text}>
            FEEDBACK </Text> 
            <View style = {styles.maincontainer}>
           
            
            <TextInput
                textAlignVertical={"top"}
                multiline={true}
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
        
        flex: 1,
        resizeMode: 'center', 
        backgroundColor:'pink',
       // opacity:0.9,
        
    },

    maincontainer:{
        marginLeft:150,
        marginTop:10,
        

    },

    text:{
        fontSize: 30,
        fontWeight: "bold",
        fontFamily:'notoserif',
        marginLeft:230,
        marginBottom:20,
        

    },


    box:{
        backgroundColor: 'black',
        
        height: 150,
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

    holder: {
        
        width:150,
        height:50,
        backgroundColor: 'black',
        marginLeft:80,
      
        borderWidth:5,
        borderColor:'white',
        marginTop:10,
        
        borderRadius:15,
        
        
       
      },

      submit:{
        
        color: 'white',
        fontWeight: "bold",
        fontSize: 27,
        backgroundColor: 'transparent',
        paddingLeft:12,
        
      }

 });