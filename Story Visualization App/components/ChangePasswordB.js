import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground } from "react-native";
export default function ChangePasswordB({navigation}){
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');

const passHandler = text => {
    setPassword(text);

}
const confirmpassHandler = text => {
    setConfirmPassword(text);
}

const changepassword= () => {
    
 
    if(password != "" && confirmpassword !="" ){
        if (password == confirmpassword){
            alert("Password Changed Successfully")
            navigation.navigate('Login');
        }
        else{
            alert("Password don't match")
        }
       
    }
    
    else{
        alert("Fields Empty")
    }
}

{}



       return(

        <ImageBackground style= {styles.container} source = {require('.././assets/background.jpg')}>
           
        

           <View style= {styles.logobox}> 
                <Image
                 style={styles.logo}
                 source={require('.././assets/svg_logo.png')}
                 />
           </View>
          
           
           <TextInput
               style={styles.box}
               placeholder="Password"
               placeholderTextColor="#aeaeae"
               onChangeText={passHandler}
               secureTextEntry
               /> 

            <TextInput
               style={styles.box}
               placeholder="Confirm Password"
               placeholderTextColor="#aeaeae"
               onChangeText={confirmpassHandler}
               secureTextEntry
               /> 
            


            <TouchableHighlight 
            style={styles.holder} 
            onPress={changepassword}
            underlayColor='#ffe0f3'
            >
			    <Text style={styles.changepassword}> Change Password</Text>
		    </TouchableHighlight>

            <View style= {styles.centerContent}> 
                <Text style={styles.divider}>______________________________________</Text>
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
       resizeMode: 'contain', 
        height : '100%',
        width : '100%',
    },

    background:{
        flex: 1,
        resizeMode: 'cover', 

    },

    divider: {
        color: '#1fcdd3' 

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
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'black',
        marginVertical: 10,
        marginHorizontal: 20,
       
      },
  
      changepassword:{
        fontWeight: "bold",
        fontSize: 17,
        margin: 10,
        padding: 2,
        paddingHorizontal: 60,
        textAlign: 'center',
        marginHorizontal: 20,
        backgroundColor: 'transparent',
        color:'white',
      },


      logo: {
        justifyContent: 'center',
        margin: 'auto',
        marginLeft: 0,
        width: 220,
        height: 73,
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