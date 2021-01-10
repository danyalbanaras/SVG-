import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground, Dimensions } from "react-native";
import { withOrientation } from "react-navigation";
import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database"


export default function Feedback({navigation}){

const [feedbacktext, setFeedbacktext] = useState('');
const currentuser = firebase.auth().currentUser;

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width



const feedbacktextHandler = text => {
    setFeedbacktext(text);

}

const myfeedback = () => {
    navigation.navigate('Feedback2')
}

const submit= () => {
    if(feedbacktext != "")
    {
        firebase 
        .database()
        .ref('users/' + currentuser.uid + '/' + 'feedback')
        .push()
  
        .set({
          text:feedbacktext,
  
        })
    
    alert("Feedback Submitted")
    navigation.navigate('Main');
    }
    else{
        alert("Fields Empty")
    }
}

{}

    return(
        <ImageBackground style= {styles.container} source = {require('.././assets/.new/static_bg.png')}>
           
           <View style = {styles.topcontainer}>
            <Text style = {styles.text}>
            FEEDBACK </Text> 
            

            <TouchableHighlight 
            style={styles.myfeedback} 
            onPress={myfeedback}
            underlayColor='pink'
            >
			    <Text style={styles.myfeedbacktext}>MY FEEDBACK</Text>
		    </TouchableHighlight>

            </View>

            <View style = {styles.maincontainer}>
           
            
            <TextInput
                textAlignVertical={"top"}
                multiline={true}
               style={[styles.box, {height: height/2,width:width/2}]}
               selectionColor={'#008eb3'}
               placeholder="Enter Feedback"
               placeholderTextColor="#aeaeae"
               onChangeText={feedbacktextHandler}
            /> 
            
            <TouchableHighlight 
            style={styles.holder} 
            onPress={submit}
            underlayColor='pink'
            >
			    <Text style={styles.submit}>SUBMIT</Text>
		    </TouchableHighlight>
           
            </View>
            

            
           
        </ImageBackground>
      

       );
     
}


const styles = StyleSheet.create({

    
    container: {
        //alignContent: 'center',
        justifyContent: 'center',
        
        flex: 1,
        resizeMode: 'center', 
        backgroundColor:'pink',
       // opacity:0.9,
        
    },

    maincontainer:{
        flex:5,
        alignSelf:'center',
        
       
        

    },

    topcontainer:{
        flex:2,
        
        

    },


    text:{
        // fontSize: 30,
        // fontWeight: "bold",
        // fontFamily:'notoserif',
        // alignSelf:'center',
        // top:30,
        
        flex: 1,
        fontSize: 32,
        color: 'white', 
        fontWeight: "bold",
        alignSelf: 'center',
        top: 30,

    },

    



    box:{
        // backgroundColor: 'black',
        // color: 'black',
        // fontSize: 17,
        // paddingTop: 15,
        // paddingLeft:15,
        // borderRadius: 15,
        // borderColor: 'white',
        // marginLeft:0,
        // borderWidth:5,
        // color:'white',
       
        color: 'white',
        backgroundColor: 'rgba(240,240,240,0.2)',
        fontSize: 18,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 120,
        borderRadius: 12,
        // textAlignVertical: "center",
        // textAlign: "center",

        
    },

    holder: {
        
        // width:150,
        // height:50,
        // backgroundColor: 'black',
        // marginLeft:80,
      
        // borderWidth:5,
        // borderColor:'white',
        // marginTop:10,
        
        // borderRadius:15,


        alignSelf: 'flex-start',
        borderRadius: 8,
        marginVertical: 10,
        padding: 4,
        backgroundColor: 'black', //blue
        left: 40,
       
      },


      submit:{
        
        color: 'white',
        fontWeight: "bold",
        fontSize: 24,
       
        paddingLeft:10,
        paddingRight: 10,
        backgroundColor: 'transparent'
      },

      myfeedback: {
        
        // width:150,
        // height:50,
       
        alignSelf:'flex-end',
        
        color: 'white',
        backgroundColor: 'rgba(240,240,240,0.2)',
        fontSize: 16,
  
        
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius:12,
        position:'absolute',
        top:294,
        //right: 210,
        
        
       
      },


      myfeedbacktext:{
        // color: 'white',
        // fontWeight: "bold",
        // fontSize: 20,
        // backgroundColor: 'transparent',
        // paddingLeft:5,
        color: 'white',
        fontWeight: "bold",
        fontSize: 24,
        backgroundColor: 'transparent',
        paddingLeft:10,
        paddingRight: 10, 

    }

 });