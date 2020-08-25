import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground } from "react-native";
import { withOrientation } from "react-navigation";

export default function CreateStory({navigation}){

const [storytext, setStorytext] = useState('');

const storytextHandler = text => {
    setStorytext(text);

}

const generate= () => {
    if(storytext != "")
    {
    alert("Generating Images")
    navigation.navigate('Main');
    }
    else{
        alert("Fields Empty")
    }
}

{}

    return(

        <ImageBackground style= {styles.container} source = {require('.././assets/storyimage2edited.png')}>
           
        
            <View style = {styles.maincontainer}>
            <Text style = {styles.text}>
            Story </Text>
           

            
            <TextInput
               style={styles.box}
               placeholder="Enter Text"
               placeholderTextColor="#aeaeae"
               onChangeText={storytextHandler}
               
               /> 
            
            
            <TouchableHighlight 
            style={styles.holder} 
            onPress={generate}
            underlayColor='#ffe0f3'
            >
			    <Text style={styles.submit}> Continue</Text>
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
        marginLeft:140,
        marginTop:0,
        marginBottom:240,

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
        marginRight:200,
       
        
    },

    holder: {
        
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: 'blue',
        marginLeft:0,
        width:150,
        
       
      },

      submit:{
        
        color: 'white',
        fontWeight: "bold",
        fontSize: 17,
        backgroundColor: 'transparent',
        
      }

 });