import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, PickerIOSComponent, Thumbnail } from "react-native";
import { withOrientation } from "react-navigation";
import LandscapeView from 'react-native-landscape-view';
import { ScreenOrientation } from "expo";
import { TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';


export default function Option({ navigation }) {

    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.LANDSCAPE
        ScreenOrientation.lockAsync(lock);
        
        
    });

  
   

    

   

    

    const profile = () => {

        navigation.navigate('CreateStory');
    }

    const feedback = () => {

        navigation.navigate('Feedback');
    }

    const about = () => {

        navigation.navigate('About');
    }
    
    { }

    return (
        <LandscapeView>
            <StatusBar hidden />
            <ImageBackground style={styles.container} source={require('.././assets/main_images/mainbackground.jpg')}>




               
                    
                <View style={styles.background}>
                    
                    
                    
                  
                    <TouchableOpacity
                        onPress={profile}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>Profile</Text>

                    </TouchableOpacity>
                    


                   
                    <TouchableHighlight
                        onPress={feedback}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>Feedback</Text>
                        

                    </TouchableHighlight>

               

                    

                    <TouchableHighlight
                        onPress={about}
                        underlayColor='rgba(0, 0, 0, 0)'>

                        <Text style={styles.menutext}>About App</Text>

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
    background:{
        height:500,
        alignContent: 'center',
        justifyContent: 'center',

        flex: 1,
        resizeMode: 'center',
        backgroundColor:'black',
        opacity:0.9,

    },

    menucontainer: {
        marginTop: 120,
        marginLeft:220,
        //marginBottom: 180,

    },

   
    menutext: {
        
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: 'notoserif',
        color:'#fffff0',
        backgroundColor:'pink',
       width:200,
        paddingLeft:20,
        paddingTop:5,
        marginLeft:200,
        
       borderRadius:15,
        borderWidth:4,
        borderColor:'#fffff0',
    }, 

    logo: {
       height:100,
       width:100,
       marginLeft:130,
    },
    thumbnail: {

        justifyContent: 'center',
       // marginHorizontal: 5,

        borderColor: 'pink',
        borderWidth: 4,
        borderColor: 'pink',
        borderRadius:300,
       

        
        height: 50,
        width: 50,
        backgroundColor: 'pink',



    },



});