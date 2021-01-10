import React, { Component,useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar } from "react-native";
import { Thumbnail } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { withOrientation } from "react-navigation";
import { ScreenOrientation } from "expo-screen-orientation";

import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database";


export default function ChangePassword({navigation}){

    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.PORTRAIT
        ScreenOrientation.lockAsync(lock);
     });

const [code, setCode] = useState('');

const codeHandler = text => {
    setCode(text);

}

const Continue= () => {
    
 
    firebase.auth().onAuthStateChanged(function(user) { 
        if (user.emailVerified) {
            user.sendEmailVerification();
        }
        else {
           console.log('Not verified');
        }
     });
}

const resendCode= () => {
    
    alert("Code Sent")
}



{}



       return(

        <ImageBackground style= {styles.container} source = {require('.././assets/login2.jpg')}>
            <StatusBar hidden />
           
        

           <View style= {styles.logobox}> 
                <Image
                 style={styles.logo}
                 source={require('.././assets/svg_logo.png')}
                 />
           </View>

           <Text style= {styles.notetext}> 
                Verification code is sent to your email address. Please enter code to continue
                
                 
           </Text>
          
           
            <TextInput
               style={styles.box}
               placeholder="Code"
               placeholderTextColor="#aeaeae"
               onChangeText={codeHandler}
               
               /> 


            <TouchableHighlight 
            style={styles.holder} 
            onPress={Continue}
            underlayColor='#ffe0f3'
            >
			    <Text style={styles.continue}> Continue</Text>
		    </TouchableHighlight>

            <View style= {styles.centerContent}> 
                <Text style={styles.divider}>______________________________________</Text>
            </View>

            <View style= {styles.resendcodeContainer }>
                <Text style= {styles.resendcodetext }> Didn't get the code? </Text>
                <TouchableHighlight 
                onPress={resendCode}
                
                underlayColor='rgba(0, 0, 0, 0)'>

			        <Text style={styles.resendcode}>Resend Code </Text>
                    
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
        height : '100%',
        width : '100%',
    },

    background:{
        flex: 1,
        resizeMode: 'cover',

    },

    resendcode:{
        fontWeight: "bold",
         
    },

    resendcodetext:{
        //color:'#fdfdfd',
    },

    divider: {
        color: '#1fcdd3' //blue

    },

    resendcodeContainer:{
        flexDirection: 'row',
        margin: 30,
        alignItems: 'center' ,
        justifyContent: 'center' ,


    },
    box:{
        backgroundColor: 'transparent',
        height: 50,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 17,
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,
    },

    holder: {
        
        borderColor: '#cccccc', 
        borderRadius: 4,
        backgroundColor: '#fdfdfd', 
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: 'black',
       
      },
  
      continue:{
        fontWeight: "bold",
        fontSize: 17,
        margin: 10,
        padding: 2,
        paddingHorizontal: 60,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: 'transparent',
        color:'white'
      },


      logo: {
        justifyContent: 'center',
        margin: 'auto',
        width: 220,
        height: 73,
        },

      notetext: {
        margin: 10,
        marginLeft: 25,
        alignItems: 'center' ,
        justifyContent: 'center' ,
        color:'red',
    },


      centerContent: {
        margin: 30,
        alignItems: 'center' ,
        justifyContent: 'center' ,
    },

    logobox:{
        marginLeft: 50,
        margin: 30,
    }

 });