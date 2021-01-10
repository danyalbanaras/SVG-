import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import {withOrientation} from 'react-navigation';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import * as ScreenOrientation from 'expo-screen-orientation';
import {Video} from 'expo-av';

export default function MyStory({navigation}) {
  const [videoUri, setVideoUri] = useState ('');

  useEffect (() => {
    const lock = ScreenOrientation.OrientationLock.LANDSCAPE;
    ScreenOrientation.lockAsync (lock);
    var BreakException = {};

    try {
      firebase
        .database ()
        .ref ('users/' + currentuser.uid + '/videos')
        .once ('value', function (snapshot) {
          snapshot.forEach (function (snap) {
            var item = snap.val ();
            setVideoUri (item.videoUrl);
            return;
          });

          // this.setState({ dataArray: returnArray })
        });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  }, []);

  const currentuser = firebase.auth ().currentUser;
const defaultVideoUrl="https://firebasestorage.googleapis.com/v0/b/story-visualization.appspot.com/o/result%2Fhello-story1?alt=media&token=8f732ecb-4f1c-456e-b0cc-2da7f1532cb3";
  return (
    <ImageBackground
      style={styles.container}
      source={require ('.././assets/.new/static_bg.png')}
    >
      <Text style={styles.text}>
        MY Story{' '}
      </Text>

      <View style={styles.box}>
        
        <Video
          source={{uri: videoUri!=''?videoUri:defaultVideoUrl}}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping
          style={styles.box}
        />

      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  container: {
    alignContent: 'center',
    justifyContent: 'center',

    flex: 1,
    resizeMode: 'center',
    backgroundColor: 'pink',
    // opacity:0.9,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'notoserif',
    marginLeft: 230,
    marginBottom: 20,
  },

  box: {
    backgroundColor: 'black',
    height: 350,
    width: 500,
    marginBottom: 70,

    borderRadius: 15,

    borderColor: 'white',

    borderWidth: 5,
  },
});
