import React, { Component, useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight,Button,Image, ImageBackground } from "react-native";
import {Thumbnail} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { withOrientation } from "react-navigation";

export default function Signup({navigation}){

const [email, setEmail] = useState('');
const [name, setName] = useState('');    
const [password, setPass] = useState('');

let time = new Date().getTime();

const emailHandler = text => {
  setEmail(text);
}

const nameHandler = text => {
    setName(text);
}

const passHandler = text => {
    setPass(text);
}

const login = () => {
    navigation.navigate('Login');
}





const signup = () => {
  if(email != "" && name != "" && password != ""){
    console.log(email);
    console.log(name);

    console.log(password);
    fetch("http://192.168.1.8:3000/signup", {
    method: 'POST',
    method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "name" :name,
       "password":password,
     })
  })
  .then((response) => response.text())
  .then((responseText) => {
      console.log(responseText);
    if(responseText=="fail")
    {
        alert("There was an error inserting data into table")
    }
    else if(responseText=="success")
    {   
        navigation.navigate('Login');
        alert("Signup successful")
    }
    else if(responseText=="exists")
    {   
        alert("User Already Exists")
    }
  })
  .catch((error) => {
      console.error(error);
  });
    alert("account created")
    navigation.navigate('Login');
  
  
  } 
  else if ( email == "" && name == "" && password == ""){
  
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
        placeholder="Email"
        placeholderTextColor="#aeaeae"
        onChangeText={emailHandler}
               
      /> 

        <TextInput
          style={styles.box}
          placeholder="Name"
          placeholderTextColor="#aeaeae"
          onChangeText={nameHandler}
        /> 
        
        <TextInput
          style={styles.box}
          placeholder="Password"
          placeholderTextColor="#aeaeae"
          onChangeText={passHandler}
          secureTextEntry
        /> 

        <TouchableHighlight 
          style={styles.holder} 
          onPress={signup}
          underlayColor='#ffe0f3'
        >
			    <Text style={styles.signup}> Sign up </Text>
		    </TouchableHighlight>


        <View style= {styles.centerContent}> 
          
          <Text style={styles.divider}>______________________________________</Text>
        
        </View>

        <View style= {styles.loginContainer }>
          
          <Text style= {styles.logintext }> Already have an account? </Text>
          
          <TouchableHighlight 
              onPress={login}
              underlayColor='rgba(0, 0, 0, 0)'>
                  
            <Text style={styles.login}>Log in. </Text>
                    
		        </TouchableHighlight>
            </View>
        
      </ImageBackground>

  );
      
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flex: 1,
    height : '100%',
    width : '100%',
  },
    
  login:{
        fontWeight: "bold",
        

  },
  
  logintext:{
    //color:'#fdfdfd',
  },

  divider: {
    color: '#1fcdd3' 
  },

  loginContainer:{
    flexDirection: 'row',
    margin: 30,
    alignItems: 'center' ,
    justifyContent: 'center' ,
    marginBottom: 120,
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
    backgroundColor: '#fdfdfd', 
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'black',
  },
  
  signup:{
    fontWeight: "bold",
    fontSize: 17,
    margin: 10,
    padding: 2,
    paddingHorizontal: 60,
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'white',
        
  },


  logo: {
    justifyContent: 'center',
    margin: 'auto',
    marginTop: 100,
    marginLeft:0,
    width: 220,
    height: 73,
  },

  centerContent: {
    margin: 30,
    alignItems: 'center' ,
    justifyContent: 'center' ,
    },

  logobox: {
    margin: 30,
    marginTop:50,
    marginLeft:50,
  },

    
 });