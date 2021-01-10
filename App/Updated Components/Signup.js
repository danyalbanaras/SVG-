import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, Dimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database";


export default function Signup({ navigation }) {

  useEffect(() => {
    const lock = ScreenOrientation.OrientationLock.PORTRAIT
    ScreenOrientation.lockAsync(lock);
  });

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPass] = useState('');
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

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
    if (email != "" && password != "") {
      console.log(email);
      console.log(name);

      console.log(password);
      firebase.default.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => setting_fields())
        .catch(error => console.log(error));



    }
    else if (email == "" && name == "" && password == "") {

      alert("Fields Empty")

    }

  }

  const setting_fields = () => {
    const currentuser = firebase.auth().currentUser;
    console.log(currentuser.uid)
    firebase
      .database()
      .ref('users/')
      .child(currentuser.uid)



      .set({
        name: '',
        profilepic: '',
        email: currentuser.email,




      })

    setting_fields2()



  }

  const setting_fields2 = () => {
    const currentuser = firebase.auth().currentUser;
    firebase
      .database()
      .ref('users/' + currentuser.uid)
      .child('feedback')

      .set({
        field: 'feedback',

      })

    firebase
      .database()
      .ref('users/' + currentuser.uid)
      .child('story')

      .set({
        
        field: 'video'


      })

    firebase.auth().currentUser.sendEmailVerification().then(function () {
      alert('A verification email is sent to your email address. Kindly Confirm your Email Address.')
    }, function (error) {
      alert(error)
    });

   



  }


  { }

  return (

    <ImageBackground style={styles.container} source={require('.././assets/.new/login.png')}imageStyle= 
    {{opacity:0.5}}>
      <StatusBar hidden />

      <View style={styles.empty}>
                
            </View>
      <View style={styles.logobox}>
        <Image
          style={{ width: width / 1.5, height: height / 5 }}
          source={require('.././assets/.new/svg_logo.png')}
        />
      </View>

      <View style={styles.mainontainer}>

        <TextInput
          style={[styles.box, { width: width / 1.2, height: height / 14 }]}
          selectionColor={'#008eb3'}
          placeholder="Email"
          placeholderTextColor="#aeaeae"
          onChangeText={emailHandler}

        />



        <TextInput
          style={[styles.box, { width: width / 1.2, height: height / 14 }]}
          selectionColor={'#008eb3'}
          placeholder="Password"
          placeholderTextColor="#aeaeae"
          onChangeText={passHandler}
          secureTextEntry
        />

        <TouchableHighlight
          style={[styles.holder, { width: width / 1.2, height: height / 14 }]}
          onPress={signup}
          underlayColor='#ffe0f3'
        >
          <Text style={styles.signup}> Sign up </Text>
        </TouchableHighlight>

      </View>


      <Text style={styles.divider}>____________________________</Text>

      <View style={styles.bottomcontainer}>

        <View style={styles.loginContainer}>

          <Text style={styles.logintext}> Already have an account? </Text>

          <TouchableHighlight
            onPress={login}
            underlayColor='rgba(0, 0, 0, 0)'>

            <Text style={styles.login}>Log in. </Text>

          </TouchableHighlight>
        </View>
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
  },


  empty: {
    flex: 1,
     

 },


 logobox: {
     flex: 2,
     alignSelf: 'center',
     //position:'absolute',
     //top: 140,
    justifyContent:'flex-end'

 },

  maincontainer: {
    flex: 2,
  },
  divider: {
    flex: 1,
    color: '#008eb3',//blue
    alignSelf: 'center',
    top: 30,

  },
  bottomcontainer: {
    flex: 2,
    alignSelf: 'center'
  },

  logo: {
    // justifyContent: 'center',
    //marginLeft: 0,
    // margin: 'auto',
    // width: 220,
    //height: 73,


  },

  box: {
    //backgroundColor: 'transparent',
    //height: 50,
    //width:100,
    color: 'black',
    alignSelf: 'center',
    //marginHorizontal: 20,
    borderColor: 'pink',
    marginVertical: 10,
    fontSize: 17,
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,

  },

  holder: {
    alignSelf: 'center',
    // borderWidth: 1,
    borderRadius: 8,
    // backgroundColor: '#fdfdfd',
    marginVertical: 10,
    //marginHorizontal: 20,
    // borderColor: '#f4656d',
    backgroundColor: '#f4656d',

  },





  login: {
    fontWeight: "bold",
    color:'#f4656d', //pink
  },



  logintext: {
    color:'#008eb3', //blue
    
  },




  loginContainer: {


    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',


  },




  signup: {

    color: 'white',
    fontWeight: "bold",
    fontSize: 17,
    margin: 10,
    padding: 2,
    paddingHorizontal: 60,
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: 'transparent',
  },




});