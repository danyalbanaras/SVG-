import React, { Component, useState, useEffect } from "react";
import { Thumbnail, View, ScrollView, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, Dimensions } from "react-native";
import { withOrientation } from "react-navigation";
import * as firebase from 'firebase'
import 'firebase/auth'
import "firebase/database"
import * as  ScreenOrientation from "expo-screen-orientation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player'


export default function MyStory({ navigation }) {
  const [videoUri, setVideoUri] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [selected, setSelected] = useState('');
  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width

  useEffect(() => {
    const lock = ScreenOrientation.OrientationLock.LANDSCAPE
    ScreenOrientation.lockAsync(lock);
    firebase.database().ref('users/' + currentuser.uid + '/story').once('value', function (snapshot) {


      snapshot.forEach(function (snap) {
        var item = snap.val();
        //item.key = snap.key;
        console.log("**************************");
        console.log(item.title);
        console.log("**************************");
        // setReturnArray(returnArray.concat(item));
        setReturnArray(oldArray => [...oldArray, item.title]);


      });

      // this.setState({ dataArray: returnArray })

    });
    console.log('aaaaaaaaaaaaaaaaaaa')
    console.log(returnArray)
    //console.log(returnArray2)
  }, []);

  const currentuser = firebase.auth().currentUser;
  const [returnArray, setReturnArray] = useState([])
  const returnArray2 = ['aaaa', 'ssss', 'hhh'];

  const closevideo = () => {
    setShowVideo(false)
    setShowMain(true)
    console.log("aaaaaaaaaaaaaaaaa")


  }

  const deletevideo = () => {
    firebase
      .database()
      .ref('users/' + currentuser.uid + '/story/')
      // .where('title','==',item)
      .once('value', function (snapshot) {
        snapshot.forEach(function (snap) {
          var item = snap.val();
          if (item.title == selected) {
            console.log(item.title)
            snap.ref.remove()

            

          }
          








          return;
        });

        // this.setState({ dataArray: returnArray })
      });

      alert ('story deleted')
      navigation.navigate('Main')
   
    
   
    


  }

  const storyHandler = (name) => {
    firebase
      .database()
      .ref('users/' + currentuser.uid + '/story/')
      // .where('title','==',item)
      .once('value', function (snapshot) {
        snapshot.forEach(function (snap) {
          var item = snap.val();
          if (item.title == name) {
            setVideoUri(item.video);
            console.log(item.title);
            setSelected(item.title);
            

          }








          return;
        });

        // this.setState({ dataArray: returnArray })
      });
    setShowMain(false)

    setShowVideo(true)
  }

  return (

    <ImageBackground style={styles.container} source={require('.././assets/.new/static_bg.png')}>

      {showVideo
        ?
        <View style={[styles.videocontainer, { height: height, width: width, justifyContent: 'center' }]}>




<TouchableHighlight
            onPress={closevideo}
            underlayColor='rgba(0, 0, 0, 0)'>

            <Image
              style={styles.thumbnail}
              source={require('.././assets/background/close.jpg')}
            />

          </TouchableHighlight>

          

         

          <VideoPlayer
            videoProps={{
              shouldPlay: false,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: {
                uri: videoUri,
              },
            }}
            inFullscreen={true}
            showControlsOnLoad={true}
            showFullscreenButton={false}
            width={600}
            height={200}
          //alignSelf = {'center'}
          //backgroundColor= {'red'}
          />

<TouchableHighlight
            onPress={deletevideo}
            underlayColor='rgba(0, 0, 0, 0)'>

            <Image
              style={styles.delete}
              source={require('.././assets/mainflatlist/delete.jpg')}
            />

          </TouchableHighlight>

          


        </View> : null



      }

      {showMain
        ?
        <View>

          <View style={styles.textcontainer}>


            <Text style={styles.text}>MY STORIES</Text>
          </View>
          <View style={styles.maincontainer}>

            <ScrollView style={styles.box}>




              {returnArray.map((item, key) => (
                <TouchableHighlight
                  onPress={() => storyHandler(item)}>

                  <Text key={key} style={styles.submit}  > {item} </Text>
                </TouchableHighlight>


              )


              )}



            </ScrollView>








          </View>
        </View> : null

      }




    </ImageBackground>


  );

}


const styles = StyleSheet.create({


  container: {
    alignContent: 'center',
    justifyContent: 'center',

    flex: 1,
    resizeMode: 'center',
    backgroundColor: 'pink',
    // opacity:0.9,

  },

  maincontainer: {
    // marginLeft: 150,
    // marginTop: 10,
    //flex:10


  },

  textcontainer: {


  },

  text: {
    // fontSize: 30,
    // fontWeight: "bold",
    // fontFamily: 'notoserif',
    // marginLeft: 230,
    // marginBottom: 20,


    fontSize: 32,
    color: 'pink',
    fontWeight: "bold",
    alignSelf: 'center',
    // top: 30,


  },


  box: {

    color: 'white',
    backgroundColor: 'rgba(240,240,240,0.2)',
    height: 240,
    width: 420,


    fontSize: 18,
    paddingTop: 8,
    paddingLeft: 8,
    borderRadius: 12,

    marginBottom: 32,
    marginLeft: 16,

    color: 'white',
    alignSelf: "center"



  },

  holder: {

    width: 150,
    height: 50,
    backgroundColor: 'black',
    marginLeft: 80,

    borderWidth: 5,
    borderColor: 'white',
    marginTop: 10,

    borderRadius: 15,



  },

  submit: {

    color: 'white',
    fontWeight: "bold",
    fontSize: 27,
    backgroundColor: 'transparent',
    paddingLeft: 12,
    borderWidth: 5,
    borderColor: 'black',
    margin: 10,
    //width:120,
    padding: 5,

  },

  videocontainer: {

    position: 'absolute',
    backgroundColor: 'black',

    borderWidth: 5,
    borderColor: 'pink',
    opacity: 1,
    alignSelf: "center"


  },
  thumbnail: {
    //justifyContent: 'center',


    borderColor: 'white',
    borderWidth: 2,
    borderColor: 'pink',

    //margin: 5,
    height: 50,
    width: 50,
    //position: 'absolute',
   // right: 0,
   // bottom: 50,
    left : 40,
    borderRadius: 300,

    //backgroundColor: 'purple',
    //borderRadius:300,
  },

  delete: {
    //justifyContent: 'center',


    borderColor: 'white',
    borderWidth: 2,
    borderColor: 'pink',
    //position:'absolute',

    //margin: 5,
    height: 50,
    width: 50,
    //position: 'absolute',
  // right: 10,
    //bottom: 20,
    right : 20,
    borderRadius: 300,
    alignSelf:'flex-end'

    //backgroundColor: 'purple',
    //borderRadius:300,
  },

});