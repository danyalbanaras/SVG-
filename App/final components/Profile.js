import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, Dimensions, TouchableOpacity } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import * as ScreenOrientation from "expo-screen-orientation";

import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database";
//import { setDetectionImagesAsync } from "expo/build/AR";

export default function Profile({ navigation }) {

  useEffect(() => {
    const lock = ScreenOrientation.OrientationLock.LANDSCAPE
    ScreenOrientation.lockAsync(lock);
    firebase
      .database()
      .ref('users/' + currentuser.uid + '/' + 'name')
      .once('value')
      .then(snapshot => {
        if (snapshot.val() == '') {
          setNamePlaceHolder('Name');

        }
        else {
          setNamePlaceHolder(snapshot.val());
        }
      });
    if (check == 0) {
      firebase
        .database()
        .ref('users/' + currentuser.uid + '/' + 'profilepic')
        .once('value')
        .then(snapshot => {
          if (snapshot.val() == '') {
            setUser('https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png');

          }
          else {
            setUser(snapshot.val());
          }
        });
    }
  });

  const [email, setEmail] = useState('');

  const [user, setUser] = useState('https://media.istockphoto.com/videos/loading-symbol-loop-video-id547356494?s=640x640');
  const currentuser = firebase.auth().currentUser;
  const [namePlaceHolder, setNamePlaceHolder] = useState('');
  const [name, setName] = useState('');
  const [profilepic, setprofilepic] = useState('');
  const [check, setCheck] = useState(0)

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width










  const emailHandler = text => {
    setEmail(text);
  }

  const nameHandler = text => {
    setName(text);
  }





  const askPermission = async (type, failureMessage) => {
    const { status, permissions } = await Permissions.askAsync(type);

    if (status === 'denied') {
      alert(failureMessage);
    }
  };

  const pickImage = async () => {
    await askPermission(
      Permissions.CAMERA_ROLL,
      'Please allow SVG to access your Gallery...'
    );
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (pickerResult.uri != null) {
      setCheck(1)
      setUser(pickerResult.uri)
      uploadImage(pickerResult.uri, currentuser.email)


    }






  };

  const uploadImage = async (uri, imageName) => {

    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob)





  }

  const setImage = async () => {

    const url = await
      firebase.storage()
        .ref('images/' + currentuser.email)
        .getDownloadURL();

    //console.log(url)
    firebase
      .database()
      .ref('users/' + currentuser.uid)

      .update({
        profilepic: url,

      })





  }



  const save = () => {

    setImage()

    if (name != "") {
      firebase
        .database()
        .ref('users/' + currentuser.uid)

        .update({
          name: name,

        })
    }
    console.log(user)




    alert('Changes Saved')
    navigation.navigate('Option')


  }


  { }

  return (

    <ImageBackground style={styles.container} source={require('.././assets/.new/profile_bg.png')}>
      <StatusBar hidden />
      <View style={styles.topcontainer}>
        <TouchableOpacity
          onPress={pickImage}>
          <Image
            style={styles.logo}
            source={{ uri: user }}
          />
        </TouchableOpacity>

      </View>



      <View style={styles.maincontainer}>

        <Text
          style={styles.box}
        >
          {currentuser.email}
        </Text>

        <TextInput
          style={styles.box}
          placeholder={namePlaceHolder}
          selectionColor={'#008eb3'} //blue
          placeholderTextColor="#aeaeae"
          onChangeText={nameHandler}
        />



        <TouchableHighlight
          style={styles.holder}
          onPress={save}
          underlayColor='#ffe0f3'
        >
          <Text style={styles.save}>Save Changes</Text>
        </TouchableHighlight>




      </View>





    </ImageBackground>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
  },

  topcontainer: {

    flex: 2,
    alignSelf: 'center',
    top: 10,

  },

  maincontainer: {

    flex: 4,
    alignSelf: 'center'

  },


  logo: {


    width: 100,
    height: 100,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: 'white',
  },



  box: {

   // height: (Dimensions.get('window').height) / 7,
    //width: (Dimensions.get('window').width) / 2,
    width:380,
    height:50,

    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: 'rgba(240,240,240,0.2)',
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 17,
    padding: 8,
    borderColor: 'rgba(240,240,240,0.5)',
    borderWidth: 2,

  },

  holder: {

    //height: (Dimensions.get('window').height) / 7,
    //width: (Dimensions.get('window').width) / 2,
    width:380,
    height:50,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 8,

    marginVertical: 10,
    backgroundColor: 'black',
    padding: 10,


  },

  save: {
    fontWeight: "bold",
    fontSize: 18,


    paddingHorizontal: 60,
    textAlign: 'center',
    marginHorizontal: 20,
    color: 'white',


  },








});