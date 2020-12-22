import React, { Component, useState, useRef } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button,
  Image,
  ImageBackground,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  LogBox,
} from 'react-native';
import { withOrientation } from 'react-navigation';
import LandscapeView from 'react-native-landscape-view';
import { Container, Content, Icon, ListItem, Thumbnail } from 'native-base';
import { Audio } from 'expo-av';
import Draggable2 from '.././components/Draggable2';
import { TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

import { captureScreen } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';

export default function CreateStory({ navigation }) {

   const [serverlink, setServerlink] = useState('');

  

    

 // const serverlink = 'http://06503267dea7.ngrok.io/'



  const [char1, setChar1] = useState('');
  const [char2, setChar2] = useState('');
  const [action1, setAction1] = useState('aaaaaaaaaaaaaaaaaa');
  const [action2, setAction2] = useState('');

  const [var_object1, setVar_object1] = useState('');
  const [var_object2, setVar_object2] = useState('');

  const [object1_check, setobject1_check] = useState(0);
  const [object2_check, setobject2_check] = useState(0);

  //const var_object1 = require('.././assets/objects/object1.jpg');
  //const var_object2 = require('.././assets/objects/object2.jpg');
  const var_object3 = require('.././assets/objects/object3.jpg');
  const var_object4 = require('.././assets/objects/object4.jpg');
  const var_object5 = require('.././assets/objects/object5.jpg');
  const var_object6 = require('.././assets/objects/object6.jpg');

  const [var_character1, setVar_character1] = useState('');
  const [var_character2, setVar_character2] = useState('');

  const [character1_name, setCharacter1_name] = useState('CHARACTER 1');
  const [character2_name, setCharacter2_name] = useState('CHARACTER 2');

  const sound = new Audio.Sound();

  const [backgroundText, setBackgroundText] = useState('');
  const [character1Text, setCharacter1Text] = useState('');
  const [character2Text, setCharacter2Text] = useState('');
  const [showMain, setShowMain] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [showMusic, setShowMusic] = useState('');
  const [showCharacter, setShowCharacter] = useState(false);
  const [showObject, setShowObject] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [background, setBackground] = useState(
    require('.././assets/mainflatlist/background8.jpg')
  );
  // const [flatlistadjustment, setFlatlistadjustment] = useState(190);
  //const [textadjustment, settextadjustment] = useState(95);
  const [characteradjustment1, setcharacteradjustment1] = useState(0);
  const [characteradjustment2, setcharacteradjustment2] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const slide_character1 = useRef(new Animated.Value(0)).current;
  const slide_characterX = useRef(new Animated.Value(0)).current;
  const slide_character2 = useRef(new Animated.Value(0)).current;

  const [frameNo, setFrameNo] = useState(1);

  const [position_character1, set_position_character1] = useState(-300);
  const [position_character2, set_position_character2] = useState(300);
  const [direction_character1, set_direction_character1] = useState(0);
  const [direction_character2, set_direction_character2] = useState(1);
  const [status_character1, set_status_character1] = useState(0);
  const [status_character2, set_status_character2] = useState(0);

  const [character1_movement, set_character1_movement] = useState(0);
  const [character2_movement, set_character2_movement] = useState(0);

  const [character1_movementtime, set_character1_movementtime] = useState(
    3000
  );
  const [character2_movementtime, set_character2_movementtime] = useState(0);

  const [objectSelected, setObjectSelected] = useState(0);

  const [character1, setCharacter1] = useState(false);
  const [character2, setCharacter2] = useState(false);
  const [character3, setCharacter3] = useState(false);
  const [character4, setCharacter4] = useState(false);
  const [character5, setCharacter5] = useState(false);
  const [character6, setCharacter6] = useState(false);

  const [object1, setObject1] = useState(false);
  const [object2, setObject2] = useState(false);
  const [object3, setObject3] = useState(false);
  const [object4, setObject4] = useState(false);
  const [object5, setObject5] = useState(false);
  const [object6, setObject6] = useState(false);

  //save image boolean
  //save image boolean

  const [deleteone, setdeleteone] = useState(
    require('.././assets/objects/none.png')
  );
  const [deletetwo, setdeletetwo] = useState(
    require('.././assets/objects/none.png')
  );
  const [deletethree, setdeletethree] = useState(
    require('.././assets/objects/none.png')
  );
  const [deletefour, setdeletefour] = useState(
    require('.././assets/objects/none.png')
  );

  const [character1_save, set_character1_save] = useState(0);
  const [character2_save, set_character2_save] = useState(0);

  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  const currentuser = firebase.auth().currentUser;

  const capturescreen = testimage => {
    console.log('capturing image');
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      async uri => {
        console.log(uri);
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child('screenshots/' + testimage);
        return ref.put(blob);
      },
      error => console.error('Oops, snapshot failed', error)
    );
  };

  const status = () => {
    shouldPlay: false;
  };

  const playmusic = () => {
    sound.playAsync();
  };

  const pausemusic = () => {
    sound.pauseAsync();
  };

  const backgroundtextHandler = text => {
    setBackgroundText(text);
  };

  const character1textHandler = async text => {
    setCharacter1Text(text);
    console.log(`CHARACTER TEXT: ${character1Text}`);

    if (
      character1Text.includes('running') ||
      character1Text.includes('run') ||
      character1Text.includes('Run') ||
      character1Text.includes('Runnning')
    ) {
      setAction1('run');
      console.log(`Action: ${action1}`);
      set_character1_movement(1);
      set_character1_movementtime(5000);

      //setVar_character1(require('.././assets/result/test4.gif'));
    }
    if (
      character1Text.includes('walking') ||
      character1Text.includes('Walking') ||
      character1Text.includes('Walk') ||
      character1Text.includes('walk') ||
      character1Text.includes('Move') ||
      character1Text.includes('move')
    ) {
      await setAction1('walk');
      console.log(`Action: ${action1}`);
      set_character1_movement(1);
      set_character1_movementtime(10000);

      //  setVar_character1(require('.././assets/result/test8.gif'));
    }
    if (character1Text.includes('tail') || character1Text.includes('Tail')) {
      await setAction1('tail');
      console.log(`Action: ${action1}`);
      set_character1_movement(0);
    }

    if (
      character1Text.includes('flying') ||
      character1Text.includes('Flying') ||
      character1Text.includes('fly') ||
      character1Text.includes('Fly')
    ) {
      await setAction1('fly');
      console.log(`Action: ${action1}`);
      set_character1_movement(1);
      set_character1_movementtime(20000);
    }
    if (
      character1Text.includes('move') ||
      character1Text.includes('Move') ||
      character1Text.includes('moving') ||
      character1Text.includes('Moving')
    ) {
      await setAction1('move');
      console.log(`Action: ${action1}`);
      set_character1_movement(0);
    }

    if (
      character1Text.includes('eat') ||
      character1Text.includes('Eat') ||
      character1Text.includes('Eating') ||
      character1Text.includes('eating')
    ) {
      await setAction1('eat');
      console.log(`Action: ${action1}`);
      set_character1_movement(0);
    }

    if (
      character1Text.includes('head') ||
      character1Text.includes('Head') ||
      character1Text.includes('look') ||
      character1Text.includes('Look')
    ) {
      await setAction1('head');
      console.log(`Action: ${action1}`);
      set_character1_movement(0);
    }

    if (
      character1Text.includes('Trot') ||
      character1Text.includes('trot') ||
      character1Text.includes('Trotting') ||
      character1Text.includes('trotting')
    ) {
      await setAction1('trot');
      console.log(`Action: ${action1}`);
      set_character1_movement(1);
      set_character1_movementtime(10000);
    }
  };

  const character2textHandler = async text => {
    setCharacter2Text(text);

    console.log(`CHARACTER TEXT: ${character2Text}`);

    if (
      character2Text.includes('running') ||
      character2Text.includes('run') ||
      character2Text.includes('Run') ||
      character2Text.includes('Runnning')
    ) {
      setAction2('run_reverse');
      console.log(`Action: ${action2}`);
      set_character2_movement(1);
      set_character2_movementtime(5000);
      console.log(character2_movementtime);

      //setVar_character1(require('.././assets/result/test4.gif'));
    }
    if (
      character2Text.includes('walking') ||
      character2Text.includes('Walking') ||
      character2Text.includes('Walk') ||
      character2Text.includes('walk') ||
      character2Text.includes('Move') ||
      character2Text.includes('move')
    ) {
      await setAction2('walk_reverse');
      console.log(`Action: ${action2}`);
      set_character2_movement(1);
      set_character2_movementtime(10000);
      console.log(character2_movementtime);

      //  setVar_character1(require('.././assets/result/test8.gif'));
    }
    if (character2Text.includes('tail') || character2Text.includes('Tail')) {
      await setAction2('tail_reverse');
      console.log(`Action: ${action2}`);
      set_character2_movement(0);

      //setVar_character1(require('.././assets/result/test7.gif'));
    }

    if (
      character2Text.includes('flying') ||
      character2Text.includes('Flying') ||
      character2Text.includes('fly') ||
      character2Text.includes('Fly')
    ) {
      await setAction2('fly_reverse');
      console.log(`Action: ${action2}`);
      set_character2_movement(1);
      set_character2_movementtime(5000);
      //setVar_character1(require('.././assets/result/test7.gif'));
    }

    if (
      character2Text.includes('eat') ||
      character2Text.includes('Eat') ||
      character2Text.includes('Eating') ||
      character2Text.includes('eating')
    ) {
      await setAction2('eat_reverse');
      console.log(`Action: ${action2}`);
      set_character1_movement(0);
    }

    if (
      character2Text.includes('head') ||
      character2Text.includes('Head') ||
      character2Text.includes('look') ||
      character2Text.includes('Look')
    ) {
      await setAction2('head_reverse');
      console.log(`Action: ${action2}`);
      set_character1_movement(0);
    }

    if (
      character2Text.includes('Trot') ||
      character2Text.includes('trot') ||
      character2Text.includes('Trotting') ||
      character2Text.includes('trotting')
    ) {
      await setAction2('trot_reverse');
      console.log(`Action: ${action2}`);
      set_character2_movement(1);
      set_character2_movementtime(10000);
    }
  };

  const generateStory = async () => {
    var ba = backgroundText.includes('beach' || 'Beach');
    var bb = backgroundText.includes('jungle');
    var bc = backgroundText.includes('city');
    //var bd = backgroundText.includes('Day' || 'Day')
    //var be = backgroundText.includes('Day' || 'Day')
    //var bf = backgroundText.includes('day' || 'Day')

    var a = character1Text.includes('running');
    var b = character1Text.includes('walking');
    var c = character1Text.includes('tail');
    var d = character2Text.includes('flying');

    //var c = text.includes('city')
    //var d = text.includes('river')
    //var e = text.includes('night')
    //var f = text.includes('raining' || 'rain' || 'rainy')

    //var oa = text.includes('basketball')
    //var ob = text.includes('football')
    //var oc = text.includes('book')
    //var od = text.includes('umberella')
    //var oe = text.includes('horse')
    //var og = text.includes('lion')

    if (backgroundText != null) {
      if (
        backgroundText.includes('jungle') ||
        backgroundText.includes('Jungle') ||
        backgroundText.includes('Forest') ||
        backgroundText.includes('forest')
      ) {
        setBackground(
          require('.././assets/background/gifs/forest_day_sunny.jpg')
        );
      } else if (
        backgroundText.includes('beach') ||
        backgroundText.includes('Beach')
      ) {
        setBackground(
          require('.././assets/background/gifs/beach_day_sunny.jpg')
        );
      } else if (
        backgroundText.includes('city') ||
        backgroundText.includes('City')
      ) {
        setBackground(
          require('.././assets/background/gifs/city_day_sunny.jpg')
        );
      }
    }
    if (character1Text != '') {
      //alert('image generating')
      setVar_character1(require('.././assets/resultnew/loading.gif'));

      // if(character1Text.includes('running')){

      // setAction1('run')
      // console.log(`Action: ${action1}`);

      // //setVar_character1(require('.././assets/result/test4.gif'));

      // }
      // if(character1Text.includes('walking')){
      //     await setAction1('walk')
      //     console.log(`Action: ${action1}`);

      //   //  setVar_character1(require('.././assets/result/test8.gif'));

      // }
      // if(character1Text.includes('tail')){

      //     await setAction1('tail')
      //     console.log(`Action: ${action1}`);

      //     //setVar_character1(require('.././assets/result/test7.gif'));

      //     }

      // if(character1Text.includes('flying')){

      //     await setAction1('fly')
      //     console.log(`Action: ${action1}`);
      //     //setVar_character1(require('.././assets/result/test7.gif'));

      // }

      // await new Promise(r => setTimeout(r, 5000));

      fetch(`${serverlink}?action=${action1}&character=${char1}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //   body: JSON.stringify(AdminLoginBindingModel)
      })
        .then(res => {
          if (res.ok) {
            return res.text();
          } else {
            alert(
              'Sorry, this action is not available for the selected character'
            );
          }
        })
        .then(obj => {
          console.log(obj);
          setVar_character1({ uri: obj });
          if (character1_movement == 1) {
            setTimeout(function () {
              Animated.timing(slide_character1, {
                toValue: 200,
                duration: character1_movementtime,
              }).start();
            }, 1000);
          }
        })
        .catch(error => {
          alert(
            'Sorry, this action is not available for the selected character'
          );
        });
    }

    setTimeout(function () {
      if (character2Text != '') {
        setVar_character2(require('.././assets/resultnew/loading.gif'));

        fetch(`${serverlink}?action=${action2}&character=${char2}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            if (res.ok) {
              return res.text();
            } else {
              alert(
                'Sorry, this action is not available for the selected character'
              );
            }
          })
          .then(obj => {
            console.log(obj);
            setVar_character2({ uri: obj });

            if (character2_movement == 1) {
              setTimeout(function () {
                Animated.timing(slide_character2, {
                  toValue: 200,
                  duration: character2_movementtime,
                }).start();
              }, 1000);
            }
          })
          .catch(error => {
            alert(
              'Sorry, this action is not available for the selected character'
            );
          });
      }
    }, 2000);

    setBackgroundText('');
    setCharacter1Text('');
    setCharacter2Text('');

    //if (a && e && f){
    //  setBackground(require('.././assets/background/gifs/beach_night_rain.gif'));
    //}
    //else if (a && e){
    //  setBackground(require('.././assets/background/gifs/beach_night_sunny.jpg'));
    //}
    //else if (a && f){
    //  setBackground(require('.././assets/background/gifs/beach_day_rain.gif'));
    //}
    //else if (a){
    //  setBackground(require('.././assets/background/gifs/beach_day_sunny.jpg'));
    //}
    //if (b && e && f) {
    //   setBackground(require('.././assets/background/gifs/forest_night_rain.gif'));
    //}
    //else if (b && e) {
    //  setBackground(require('.././assets/background/gifs/forest_night_sunny.jpg'));
    //}
    // else if (b && f) {
    //   setBackground(require('.././assets/background/gifs/forest_day_rain.gif'));
    // }
    //else if (b) {
    //  setBackground(require('.././assets/background/gifs/forest_day_sunny.jpg'));
    //}
    //  if (c && e && f){
    //    setBackground(require('.././assets/background/gifs/city_night_rain.gif'));
    // }
    // else if (c && e){
    //   setBackground(require('.././assets/background/gifs/city_night_sunny.jpg'));
    //}
    //else if (c && f){
    //  setBackground(require('.././assets/background/gifs/city_day_rain.gif'));
    //}
    //else if (c){
    //  setBackground(require('.././assets/background/gifs/city_day_sunny.jpg'));
    //}

    //else if (d && e){
    //  setBackground(require('.././assets/background/gifs/river_night_sunny.jpg'));
    //}

    //else if (d){
    //  setBackground(require('.././assets/background/gifs/river_day_sunny.jpg'));
    //}
    //else if (e){
    //  setBackground(require('.././assets/background/gifs/forest_night_sunny.jpg'));

    //        }

    //      else if (f){
    //        setBackground(require('.././assets/background/gifs/forest_day_rain.gif'));

    //        }
    //      else if (e && f){
    //        setBackground(require('.././assets/background/gifs/forest_night_rain.gif'));

    //  }

    //if (oa) {
    //  setObject1(true)

    //}
    //if (ob) {
    //  setObject2(true)

    //}
    //if (oc) {
    //  setObject3(true)

    //}
    //if (od) {
    //  setObject4(true)

    //}
    //if (oe) {
    //  setCharacter3(true)

    //}
    //if (og) {
    //  setCharacter2(true)

    //}
  };

  const closeText = () => {
    setShowText(false);
  };

  const closeHelp = () => {
    setShowHelp(false);
    setFlatlistadjustment(15);

    setShowText(true);
  };

  const mainlistoptions = async item => {
    console.log('Selected Item :', item);
    if (item.key == '01') {
      setShowMain(false);
      setShowBackground(true);
    }

    if (item.key == '02') {
      if (
        character1_name != 'CHARACTER 1' &&
        character2_name != 'CHARACTER 2'
      ) {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      } else {
        setShowMain(false);
        setShowCharacter(true);
      }
    }
    if (item.key == '03') {
      //setVar_character1(require('.././assets/result/test4.gif'))
      if (object1_check == 0) {
        setShowMain(false);
        setShowObject(true);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }
      //await Animated.timing(slide_character1, {
      //  toValue: 300,
      //duration: 3000,
      //}).start();

      //setTimeout(function(){

      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      //setVar_character1(require('.././assets/transparent_characters/dog.jpg'))
      //}, 3000);
    }

    if (item.key == '04') {
      // setFlatlistadjustment(15)
      //setCharacter1(false)
      
      firebase
        .database()
        .ref('serverlink')
        .once('value')
        .then(snapshot => {
          setServerlink(snapshot.val())
        });

        console.log(serverlink)

      setShowMain(false);

      setShowText(true);
    }

    if (item.key == '05') {
      setShowMain(false);
      setShowDelete(true);
      //setCharacter1_name('CHARACTER 1')
      //setCharacter2_name('CHARACTER 2')

      //setObject1(false)
      //setObject2(false)
      //setObject3(false)
      //setObject4(false)
      //setObject5(false)
      //setObject6(false)
    }

    if (item.key == '06') {
      LogBox.ignoreAllLogs = true;

      console.disableYellowBox = true;

      // var i;
      // for (i = 0; i < 25; i++) {
      //   Animated.timing (slide_character1, {
      //     toValue: toValueIterator,
      //     duration: 1000,
      //   }).start (({finished}) => {
      //     toValueIterator += 12;

      //     capturescreen ('frame-' + frameNo + '-image-' + i);
      //   });

      //   // Animated.timing (slide_character1, {
      //   //   toValue: toValueIterator,
      //   //   duration: 0,
      //   // }).start ();
      //   // console.log ('capturing screen');
      //   // setTimeout (function () {
      //   //   capturescreen ('frame-' + frameNo + '-image-' + i);
      //   // }, 1000);
      //   // toValueIterator += 12;
      // }
      // var i;
      // for (i = 0; i < 25; i++) {
      //   console.log ('capturing screen');
      //   capturescreen ('frame-' + frameNo + '-image-' + i);
      // }
      //  () => {

      // };
      if (character1) {
        console.log('reloaded');

        let character1Gif = var_character1.uri;
        setVar_character1({ uri: '' });
        setTimeout(function () {
          setVar_character1({ uri: character1Gif });
        }, 1000);
        console.log('*******');
        console.log(var_character1.uri);
        console.log('********');
        Animated.timing(slide_character1, {
          toValue: 0,
          duration: 0,
        }).start();
      }
      if (character2) {
        let character2Gif = var_character2.uri;
        setVar_character2({ uri: '' });
        setTimeout(function () {
          setVar_character2({ uri: character2Gif });
        }, 1000);
        Animated.timing(slide_character2, {
          toValue: 0,
          duration: 0,
        }).start();
      }
      setTimeout(function () {
        var i;
        for (i = 1; i < 21; i++) {
          capturescreen('frame-' + frameNo + '-image-' + i);
          if (i == 20) {
            alert('Story Saved Successfully');
          }
        }
      }, 3000);

      // https://i.ibb.co/f1y9b1x/35de5a1ec8a8.gif
      //   setVar_character1 ({uri: ""});
      // setCharacter1(true);
      //   setVar_character1 ({uri: ""});

      //   setVar_character1 (require ('.././assets/resultnew/loading.gif'));

      //   fetch (`${serverlink}uploadImage`, {
      //     method: 'GET',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //   })
      //     .then (res => {
      //       return res.text ();
      //     })
      //     .then (obj => {
      //       console.log (obj);
      //       setVar_character1 ({uri: obj});
      //       setTimeout (function () {
      //         Animated.timing (slide_character1, {
      //           toValue: 300,
      //           duration: 5000,
      //         }).start ();
      //       }, 1000);

      //       setTimeout (function () {
      //         var i;

      //         for (i = 0; i < 25; i++) {
      //           capturescreen ('frame-' + frameNo + '-image-' + i);
      //         }

      //         alert ('Story Saved');
      //       }, 1000);
      //     });

      //   fetch (`${serverlink}saveStory`, {
      //     method: 'GET',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //   })
      //     .then (res => {
      //       return res.text ();
      //     })
      //     .then (obj => {
      //       console.log (obj);
      //     });
    }

    if (item.key == '07') {
      setObject1(false);
      setObject2(false);
      setCharacter1(false);
      setCharacter2(false);
      setShowMain(false);
      // setFrameNo (frameNo + 1);
      setFrameNo(oldValue => oldValue + 1);
      setChar1('');
      setChar2('');
      setCharacter1_name('CHARACTER 1');
      setCharacter2_name('CHARACTER 2');
      setAction1('');
      setAction2('');
      setBackgroundText('');
      setCharacter1Text('');
      setCharacter2Text('');
      Animated.timing(slide_character1, {
        toValue: 0,
        duration: 0,
      }).start();
      Animated.timing(slide_character2, {
        toValue: 0,
        duration: 0,
      }).start();

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
      }).start();

      setTimeout(function () {
        capturescreen('frame-' + frameNo + '-image-0');
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 3000,
        }).start();
      }, 3000);
      console.log(frameNo);
      setTimeout(function () {
        setShowMain(true);

        // setCharacter1 (true);
        // setCharacter2 (true);
        // setObject1 (true);
        // setObject2 (true);
      }, 6000);
    }

    if (item.key == '08') {


      // console.log("firebase.storage().ref('result/hello-story1.mp4')");
      fetch(`${serverlink}/saveStory?userName=${currentuser.uid}&storyName=1`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          if (res.ok) {
            return res.text();
          }
        })
        .then(obj => {
          console.log(obj);
          fetch(`${serverlink}/convertVideo?userName=${currentuser.uid}&storyName=1`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(res => {
              if (res.ok) {
                return res.text();
              }
            })
            .then(obj => {
              firebase
                .storage()
                .ref()
                .child(obj)
                .getDownloadURL()
                .then(function (downloadURL) {
                  firebase
                    .database()
                    .ref('users/' + currentuser.uid + '/' + 'videos')
                    .push()

                    .set({
                      videoUrl: downloadURL,

                    })
                  console.log("Video Saved, Converted, and Url uploaded Successfully")
                  //alert ("story finished")
                  
                })
                .catch(function (error) {
                  console.log(error);
                });
            });
        });
        navigation.navigate("Main")
    }

    

  };

  const changeCharacter = item => {
    if (item.key == '01') {
      setShowCharacter(false);
      setShowMain(true);
    }
    if (item.key == '02') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('BLUE HORSE');
        setChar1('bluehorse');
        setVar_character1(
          require('.././assets/transparent_characters/blue_horse.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/blue_horse.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('BLUE HORSE');
        setChar2('bluehorse_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/blue_horse.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/blue_horse.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }
    }
    if (item.key == '03') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('BROWN HORSE');
        setChar1('brownhorse');
        setVar_character1(
          require('.././assets/transparent_characters/brown_horse.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/brown_horse.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('BROWN HORSE');
        setChar2('brownhorse_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/brown_horse.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/brown_horse.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      //setCharacter2(true)
    }
    if (item.key == '04') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('BLACK CAT');
        setChar1('blackcat');
        setVar_character1(
          require('.././assets/transparent_characters/black_cat.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/black_cat.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('BLACK CAT');
        setChar2('blackcat_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/black_cat.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/black_cat.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter3(true)
    }
    if (item.key == '05') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('RED BIRD');
        setChar1('redbird');
        setVar_character1(
          require('.././assets/transparent_characters/red_bird.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/red_bird.jpg')
        );
        setcharacteradjustment1(120);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('RED BIRD');
        setChar2('redbird_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/red_bird.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/red_bird.jpg')
        );
        setcharacteradjustment2(120);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }
    }
    if (item.key == '06') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('DOG');
        setChar1('dog');
        setVar_character1(
          require('.././assets/transparent_characters/dog.jpg')
        );

        setCharacter1(true);
        setdeleteone(require('.././assets/transparent_characters/dog.jpg'));
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('DOG');
        setChar2('dog_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/dog.jpg')
        );
        setCharacter2(true);
        setdeletetwo(require('.././assets/transparent_characters/dog.jpg'));
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      //setCharacter1(true)
    }
    if (item.key == '07') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('FOX');
        setChar1('fox');
        setVar_character1(
          require('.././assets/transparent_characters/fox.jpg')
        );
        setCharacter1(true);
        setdeleteone(require('.././assets/transparent_characters/fox.jpg'));
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('FOX');
        setChar2('fox_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/fox.jpg')
        );
        setCharacter2(true);
        setdeletetwo(require('.././assets/transparent_characters/fox.jpg'));
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      //setCharacter2(true)
    }

    if (item.key == '08') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('BLUE BIRD');
        setChar1('bluebird');
        setVar_character1(
          require('.././assets/transparent_characters/blue_bird.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/blue_bird.jpg')
        );
        setcharacteradjustment1(120);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('BLUE BIRD');
        setChar2('bluebird_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/blue_bird.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/blue_bird.jpg')
        );
        setcharacteradjustment2(120);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      //setCharacter2(true)
    }
    if (item.key == '09') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('GREY HORSE');
        setChar1('greyhorse');
        setVar_character1(
          require('.././assets/transparent_characters/grey_horse.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/grey_horse.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('GREY HORSE');
        setChar2('greyhorse_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/grey_horse.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/grey_horse.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter6(true)
    }
    if (item.key == '10') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('WHITE CAT');
        setChar1('whitecat');
        setVar_character1(
          require('.././assets/transparent_characters/white_cat.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/white_cat.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('WHITE CAT');
        setChar2('whitecat_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/white_cat.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/white_cat.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter6(true)
    }
    if (item.key == '11') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('DEER');
        setChar1('deer');
        setVar_character1(
          require('.././assets/transparent_characters/deer.jpg')
        );
        setCharacter1(true);
        setdeleteone(require('.././assets/transparent_characters/deer.jpg'));
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('DEER');
        setChar2('deer_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/deer.jpg')
        );
        setCharacter2(true);
        setdeletetwo(require('.././assets/transparent_characters/deer.jpg'));
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter6(true)
    }
    if (item.key == '12') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('PURPLE HORSE');
        setChar1('purplehorse');
        setVar_character1(
          require('.././assets/transparent_characters/purple_horse.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/purple_horse.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('PURPLE HORSE');
        setChar2('purplehorse_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/purple_horse.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/purple_horse.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter6(true)
    }

    if (item.key == '13') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('RACOON');
        setChar1('racoon');
        setVar_character1(
          require('.././assets/transparent_characters/racoon.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/racoon.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('RACOON');
        setChar2('racoon_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/racoon.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/racoon.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter6(true)
    }
    if (item.key == '14') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('GIRAFFE');
        setChar1('giraffe');
        setVar_character1(
          require('.././assets/transparent_characters/giraffe.jpg')
        );
        setCharacter1(true);
        setdeleteone(
          require('.././assets/transparent_characters/giraffe.jpg')
        );
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('GIRAFFE');
        setChar2('giraffe_reverse');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/giraffe.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/giraffe.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter6(true)
    }

    if (item.key == '15') {
      if (character1_name == 'CHARACTER 1') {
        setCharacter1_name('FROG');
        setChar1('frog');
        setVar_character1(
          require('.././assets/transparent_characters/frog.jpg')
        );
        setCharacter1(true);
        setdeleteone(require('.././assets/transparent_characters/frog.jpg'));
        setcharacteradjustment1(0);
      } else if (character2_name == 'CHARACTER 2') {
        setCharacter2_name('FROG');
        setChar2('frog');
        setVar_character2(
          require('.././assets/transparent_characters_reverse/giraffe.jpg')
        );
        setCharacter2(true);
        setdeletetwo(
          require('.././assets/transparent_characters/giraffe.jpg')
        );
        setcharacteradjustment2(0);
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 CHARACTERS');
      }

      // setCharacter6(true)
    }
  };

  const changeObject = item => {
    if (item.key == '01') {
      setShowMain(true);

      setShowObject(false);
    }
    if (item.key == '02') {
      if (object1_check == 0) {
        setVar_object1(require('.././assets/objects/object1.jpg'));
        setobject1_check(1);
        setObject1(true);
        setObjectSelected(objectSelected + 1);
        setdeletethree(require('.././assets/objects/object1.jpg'));
      } else if (object2_check == 0) {
        setVar_object2(require('.././assets/objects/object1.jpg'));
        setobject2_check(1);
        setObject2(true);
        setObjectSelected(objectSelected + 1);
        setdeletefour(require('.././assets/objects/object1.jpg'));
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 OBJECTS');
      }
    }
    if (item.key == '03') {
      if (object1_check == 0) {
        setVar_object1(require('.././assets/objects/object2.jpg'));
        setobject1_check(1);
        setObject1(true);
        setObjectSelected(objectSelected + 1);
        setdeletethree(require('.././assets/objects/object2.jpg'));
      } else if (object2_check == 0) {
        setVar_object2(require('.././assets/objects/object2.jpg'));
        setobject2_check(1);
        setObject2(true);
        setObjectSelected(objectSelected + 1);
        setdeletefour(require('.././assets/objects/object2.jpg'));
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 OBJECTS');
      }
    }
    if (item.key == '04') {
      if (object1_check == 0) {
        setVar_object1(require('.././assets/objects/object3.jpg'));
        setobject1_check(1);
        setObject1(true);
        setObjectSelected(objectSelected + 1);
        setdeletethree(require('.././assets/objects/object3.jpg'));
      } else if (object2_check == 0) {
        setVar_object2(require('.././assets/objects/object3.jpg'));
        setobject2_check(1);
        setObject2(true);
        setObjectSelected(objectSelected + 1);
        setdeletefour(require('.././assets/objects/object3.jpg'));
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 OBJECTS');
      }
    }
    if (item.key == '05') {
      if (object1_check == 0) {
        setVar_object1(require('.././assets/objects/object4.jpg'));
        setobject1_check(1);
        setObject1(true);
        setObjectSelected(objectSelected + 1);
        setdeletethree(require('.././assets/objects/object4.jpg'));
      } else if (object2_check == 0) {
        setVar_object2(require('.././assets/objects/object4.jpg'));
        setobject2_check(1);
        setObject2(true);
        setObjectSelected(objectSelected + 1);
        setdeletefour(require('.././assets/objects/object4.jpg'));
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 OBJECTS');
      }
    }
    if (item.key == '06') {
      if (object1_check == 0) {
        setVar_object1(require('.././assets/objects/object5.jpg'));
        setobject1_check(1);
        setObject1(true);
        setObjectSelected(objectSelected + 1);
        setdeletethree(require('.././assets/objects/object5.jpg'));
      } else if (object2_check == 0) {
        setVar_object2(require('.././assets/objects/object5.jpg'));
        setobject2_check(1);
        setObject2(true);
        setObjectSelected(objectSelected + 1);
        setdeletefour(require('.././assets/objects/object5.jpg'));
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 OBJECTS');
      }
    }

    if (item.key == '07') {
      if (object1_check == 0) {
        setVar_object1(require('.././assets/objects/object6.jpg'));
        setobject1_check(1);
        setObject1(true);
        setObjectSelected(objectSelected + 1);
        setdeletethree(require('.././assets/objects/object6.jpg'));
      } else if (object2_check == 0) {
        setVar_object2(require('.././assets/objects/object6.jpg'));
        setobject2_check(1);
        setObject2(true);
        setObjectSelected(objectSelected + 1);
        setdeletefour(require('.././assets/objects/object6.jpg'));
      } else {
        alert('SORRY, YOU CANNOT SELECT MORE THAN 2 OBJECTS');
      }
    }
  };

  const changeMusic = item => {
    if (item.key == '01') {
      setShowMain(true);

      setShowMusic(false);
    }

    if (item.key == '02') {
      playmusic();
    }

    if (item.key == '03') {
      pausemusic();
    }
  };

  const generateImage = item => {
    if (item.key == '01') {
      generateStory();
    }

    if (item.key == '02') {
      setShowText(false);

      setShowHelp(true);
    }
    if (item.key == '03') {
      setShowMain(true);

      setShowText(false);
    }
  };

  const changeBackground = item => {
    if (item.key == '01') {
      setShowMain(true);

      setShowBackground(false);
    }
    if (item.key == '02') {
      setBackground(require('.././assets/background/background1.jpg'));
    }
    if (item.key == '03') {
      setBackground(require('.././assets/background/background2.jpg'));
    }
    if (item.key == '04') {
      setBackground(require('.././assets/background/background3.jpg'));
    }
    if (item.key == '05') {
      setBackground(require('.././assets/background/background4.jpg'));
    }

    if (item.key == '06') {
      setBackground(require('.././assets/background/background5.jpg'));
    }

    if (item.key == '07') {
      setBackground(require('.././assets/background/background6.jpg'));
    }

    if (item.key == '08') {
      setBackground(require('.././assets/background/background7.jpg'));
    }

    if (item.key == '09') {
      setBackground(require('.././assets/background/background8.jpg'));
    }

    if (item.key == '10') {
      setBackground(require('.././assets/background/background9.jpg'));
    }

    if (item.key == '11') {
      setBackground(require('.././assets/background/background10.jpg'));
    }

    if (item.key == '12') {
      setBackground(require('.././assets/background/background11.jpg'));
    }
  };

  const handleDelete = item => {
    if (item.key == 1) {
      setShowMain(true);
      setShowDelete(false);
    }
    if (item.key == 2) {
      setCharacter1(false);
      setCharacter1_name('CHARACTER 1');
      setVar_character1('');
      setdeleteone(require('.././assets/objects/none.png'));
    }
    if (item.key == 3) {
      setCharacter2(false);
      setCharacter2_name('CHARACTER 2');
      setdeletetwo(require('.././assets/objects/none.png'));
      setVar_character2('');
    }
    if (item.key == 4) {
      setObject1(false);
      setobject1_check(0);
      setdeletethree(require('.././assets/objects/none.png'));
      setVar_object1('');
    }
    if (item.key == 5) {
      setObject2(false);
      setobject2_check(0);
      setdeletefour(require('.././assets/objects/none.png'));
      setVar_object2('');
    }
  };

  const mainflatlist = [
    { key: '01', src: require('.././assets/mainflatlist/background8.jpg') },
    { key: '02', src: require('.././assets/characters/blue_horse.jpg') },
    { key: '03', src: require('.././assets/mainflatlist/object1.jpg') },
    { key: '04', src: require('.././assets/mainflatlist/text.jpg') },
    { key: '05', src: require('.././assets/mainflatlist/delete.jpg') },
    { key: '06', src: require('.././assets/mainflatlist/save.jpg') },
    { key: '07', src: require('.././assets/mainflatlist/next.jpg') },
    { key: '08', src: require('.././assets/mainflatlist/end.png') },
  ];

  const backgroundflatlist = [
    { key: '01', src: require('.././assets/background/close.jpg') },
    { key: '02', src: require('.././assets/background/background1.jpg') },
    { key: '03', src: require('.././assets/background/background2.jpg') },
    { key: '04', src: require('.././assets/background/background3.jpg') },
    { key: '05', src: require('.././assets/background/background4.jpg') },
    { key: '06', src: require('.././assets/background/background5.jpg') },
    { key: '07', src: require('.././assets/background/background6.jpg') },
    { key: '08', src: require('.././assets/background/background7.jpg') },
    { key: '09', src: require('.././assets/background/background8.jpg') },
    { key: '10', src: require('.././assets/background/background9.jpg') },
    { key: '11', src: require('.././assets/background/background10.jpg') },
    { key: '12', src: require('.././assets/background/background11.jpg') },
  ];
  const characterflatlist = [
    { key: '01', src: require('.././assets/background/close.jpg') },
    { key: '02', src: require('.././assets/characters/blue_horse2.jpg') },
    { key: '03', src: require('.././assets/characters/brown_horse2.jpg') },
    { key: '04', src: require('.././assets/characters/blackcat.jpg') },
    { key: '05', src: require('.././assets/characters/bird_red.jpg') },
    { key: '06', src: require('.././assets/characters/dog.jpg') },
    { key: '07', src: require('.././assets/characters/fox.jpg') },
    { key: '08', src: require('.././assets/characters/bird_blue.jpg') },
    { key: '09', src: require('.././assets/characters/grey_horse2.jpg') },
    { key: '10', src: require('.././assets/characters/white_cat.jpg') },
    { key: '11', src: require('.././assets/characters/deer.jpg') },
    { key: '12', src: require('.././assets/characters/purple_horse2.jpg') },
    { key: '13', src: require('.././assets/characters/racoon.jpg') },
    { key: '14', src: require('.././assets/characters/giraffe.jpg') },
    { key: '15', src: require('.././assets/characters/frog.jpg') },
  ];

  const objectflatlist = [
    { key: '01', src: require('.././assets/background/close.jpg') },
    { key: '02', src: require('.././assets/objects/object1.jpg') },
    { key: '03', src: require('.././assets/objects/object2.jpg') },
    { key: '04', src: require('.././assets/objects/object3.jpg') },
    { key: '05', src: require('.././assets/objects/object4.jpg') },
    { key: '06', src: require('.././assets/objects/object5.jpg') },
    { key: '07', src: require('.././assets/objects/object6.jpg') },
  ];

  const musicflatlist = [
    { key: '01', src: require('.././assets/background/close.jpg') },
    { key: '02', src: require('.././assets/objects/music1.jpg') },
    { key: '03', src: require('.././assets/objects/none.jpg') },
  ];
  const textflatlist = [
    { key: '01', src: require('.././assets/mainflatlist/generate.jpg') },
    { key: '02', src: require('.././assets/mainflatlist/help.jpg') },
    { key: '03', src: require('.././assets/mainflatlist/close.jpg') },
  ];

  const deleteflatlist = [
    { key: '01', src: require('.././assets/background/close.jpg') },
    { key: '02', src: deleteone },
    { key: '03', src: deletetwo },
    { key: '04', src: deletethree },
    { key: '05', src: deletefour },
  ];

  const helpflatlist = [
    { key: '01', title: 'CHARACTERS' },
    { key: '02', title: 'Blue Horse' },
    { key: '03', title: 'Brown Horse' },
    { key: '04', title: 'Black Cat' },
    { key: '05', title: 'Red Bird' },
    { key: '06', title: 'Dog' },
    { key: '07', title: 'Fox' },
    { key: '08', title: 'Blue Bird' },
    { key: '09', title: 'Grey Horse' },
    { key: '10', title: 'White Cat' },
    { key: '11', title: 'Deer' },
    { key: '12', title: 'Purple Horse' },
    { key: '13', title: 'Racoon' },
    { key: '14', title: 'Giraffe' },
  ];


  // const ngrockHandler = text => {
  //   console.log(text);
  //   setServerlink(text);
  //   console.log(serverlink);


  // };
  return (
    <LandscapeView>

      <StatusBar hidden />
      <ImageBackground style={styles.container} source={background}>



        <Animated.Text
          style={{
            height: height,
            width: width,
            fontSize: 150,
            backgroundColor: 'black',
            color: 'white',
            position: 'absolute',
            paddingVertical: 70,
            paddingHorizontal: 25,
            opacity: fadeAnim,
          }}
        >
          SCENE {frameNo}
        </Animated.Text>

        <View style={styles.container1}>

          {character1
            ? <Animated.Image
              style={[
                styles.character1,
                {
                  left: slide_character1,
                  bottom: characteradjustment1,
                },
              ]}
              source={var_character1}
            />
            : null}

          {character2
            ? <Animated.Image
              style={[
                styles.character2,
                {
                  right: slide_character2,
                  bottom: characteradjustment2,
                },
              ]}
              source={var_character2}
            />
            : null}

          {object1
            ? <Draggable2 sprite={var_object1} style={styles.object} />
            : null}
          {object2 ? <Draggable2 sprite={var_object2} /> : null}

          {showText
            ? <View
              style={[{ height: height, width: width / 3 }, styles.textbox]}
            >

              <Text style={styles.inputtitle}>BACKGROUND</Text>




              <TextInput
                style={styles.inputtext}
                textAlignVertical={'top'}
                multiline={true}
                placeholder="Enter Text"
                placeholderTextColor="white"
                onChangeText={backgroundtextHandler}
              />

              <Text style={styles.inputtitle}>{character1_name}</Text>
              <TextInput
                style={styles.inputtext}
                textAlignVertical={'top'}
                multiline={true}
                placeholder="Enter Text"
                placeholderTextColor="white"
                onChangeText={character1textHandler}
              />
              <Text style={styles.inputtitle}>{character2_name}</Text>
              <TextInput
                style={styles.inputtext}
                textAlignVertical={'top'}
                multiline={true}
                placeholder="Enter Text"
                placeholderTextColor="white"
                onChangeText={character2textHandler}
              />

              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.textflatlist}
                data={textflatlist}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => generateImage(item)}>
                    <Thumbnail
                      style={styles.thumbnailtext}
                      source={item.src}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
            : null}

          {showHelp
            ? <View style={[styles.help, { height: height, width: width / 3 }]}>
              <FlatList
                style={styles.helpflatlist}
                data={helpflatlist}
                renderItem={({ item }) => (
                  <Text style={styles.thumbnailhelp}>

                    {item.title}
                  </Text>
                )}
              />

              <TouchableOpacity onPress={closeHelp}>
                <Thumbnail
                  style={styles.thumbnailmusic}
                  source={require('.././assets/mainflatlist/close.jpg')}
                />
              </TouchableOpacity>
            </View>
            : null}

        </View>

        <View style={styles.container2}>

          {showMain
            ? <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.mainflatlist}
              data={mainflatlist}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => mainlistoptions(item)}>
                  <Thumbnail style={styles.thumbnail} source={item.src} />
                </TouchableOpacity>
              )}
            />
            : null}

          {showBackground
            ? <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={[styles.backgroundflatlist, { width: width / 1.5 }]}
              data={backgroundflatlist}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => changeBackground(item)}>
                  <Thumbnail
                    style={styles.thumbnailbackground}
                    source={item.src}
                  />
                </TouchableOpacity>
              )}
            />
            : null}

          {showCharacter
            ? <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={[styles.characterflatlist, { width: width / 1.5 }]}
              data={characterflatlist}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => changeCharacter(item)}>
                  <Thumbnail
                    style={styles.thumbnailcharacter}
                    source={item.src}
                  />
                </TouchableOpacity>
              )}
            />
            : null}

          {showObject
            ? <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={[styles.objectflatlist, { width: width / 1.5 }]}
              data={objectflatlist}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => changeObject(item)}>
                  <Thumbnail
                    style={styles.thumbnailobject}
                    source={item.src}
                  />
                </TouchableOpacity>
              )}
            />
            : null}

          {showMusic
            ? <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={[styles.musicflatlist, { width: width / 1.5 }]}
              data={musicflatlist}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => changeMusic(item)}>
                  <Thumbnail
                    style={styles.thumbnailmusic}
                    source={item.src}
                  />
                </TouchableOpacity>
              )}
            />
            : null}

          {showDelete
            ? <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={[styles.deleteflatlist, { width: width / 2 }]}
              data={deleteflatlist}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleDelete(item)}>
                  <Thumbnail
                    style={styles.thumbnaildelete}
                    source={item.src}
                  />
                </TouchableOpacity>
              )}
            />
            : null}

        </View>

      </ImageBackground>
    </LandscapeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'stretch',
  },

  container1: {
    flex: 5,
  },

  container2: {
    flex: 1,
  },

  //container 1 styling

  character1: {
    height: 150,
    width: 150,
    //marginBottom:200,
    position: 'absolute',
  },

  character2: {
    height: 150,
    width: 150,
    //marginBottom:200,
    position: 'absolute',
    bottom: 0,
  },

  object: {
    right: 300,
  },

  textbox: {
    backgroundColor: 'transparent',
    position: 'absolute',
    color: 'white',
    alignSelf: 'flex-end',
    padding: 8,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#FFB6C1',
    opacity: 0.9,
  },

  inputtext: {
    color: 'white',
    fontSize: 17,
    padding: 8,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: '#FFB6C1',
    opacity: 0.9,
  },

  inputtitle: {
    color: 'black',
    fontSize: 17,
    borderRadius: 4,
    borderColor: 'black',
    backgroundColor: '#FFB6C1',
    opacity: 0.9,
  },
  textflatlist: {
    height: 65,
    width: 190,

    borderColor: 'white',

    borderWidth: 0,
    borderRadius: 10,
    opacity: 1,
    top: 10,
  },

  thumbnailtext: {
    justifyContent: 'center',
    marginHorizontal: 5,

    borderColor: 'pink',
    borderWidth: 4,
    borderColor: 'pink',

    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },

  help: {
    position: 'absolute',
    backgroundColor: 'transparent',

    color: 'white',
    padding: 8,
    borderRadius: 4,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#FFB6C1',
    opacity: 0.9,
    alignSelf: 'flex-end',
  },

  helpflatlist: {
    height: 2,
    width: 170,
    backgroundColor: '#FFB6C1',
    borderRadius: 10,
    opacity: 0.9,
  },

  thumbnailhelp: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    paddingLeft: 5,
    height: 50,
    width: 150,
  },

  //container 2 styling

  mainflatlist: {
    //height: 70,
    // marginTop: flatlistadjustment,
    position: 'absolute',
  },

  backgroundflatlist: {
    position: 'absolute',

    height: 65,
    //width: 360,

    borderColor: 'white',
    backgroundColor: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 0.8,
  },

  characterflatlist: {
    position: 'absolute',

    height: 65,
    //width: 360,
    //marginTop: 190,
    borderColor: 'white',
    backgroundColor: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 1,
  },

  objectflatlist: {
    position: 'absolute',

    height: 65,
    // width: 360,
    //marginTop: 190,
    borderColor: 'white',
    backgroundColor: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 1,
  },

  musicflatlist: {
    position: 'absolute',

    height: 65,
    //width: 190,
    //marginTop: 190,
    borderColor: 'white',
    backgroundColor: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 1,
  },

  deleteflatlist: {
    position: 'absolute',

    height: 65,
    //width: 190,
    //marginTop: 190,
    borderColor: 'white',
    backgroundColor: 'pink',
    borderWidth: 2,
    borderRadius: 10,
    opacity: 1,
  },

  thumbnail: {
    justifyContent: 'center',
    marginHorizontal: 10,
    borderColor: 'pink',
    borderWidth: 5,
    borderRadius: 200,
    //margin: 10,
    height: 50,
    width: 50,
    backgroundColor: 'white',
  },

  thumbnailbackground: {
    justifyContent: 'center',
    //marginHorizontal: 5,

    borderColor: 'white',
    borderWidth: 2,

    margin: 5,
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },

  thumbnailcharacter: {
    justifyContent: 'center',
    //marginHorizontal: 5,

    borderColor: 'white',
    borderWidth: 2,

    margin: 5,
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },

  thumbnailobject: {
    justifyContent: 'center',
    //marginHorizontal: 5,

    borderColor: 'white',
    borderWidth: 2,

    margin: 5,
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },

  thumbnailmusic: {
    justifyContent: 'center',
    marginHorizontal: 5,

    borderColor: 'white',
    borderWidth: 2,

    //marginTop: 5,
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },

  thumbnaildelete: {
    justifyContent: 'center',
    //marginHorizontal: 5,

    borderColor: 'white',
    borderWidth: 2,

    margin: 5,
    height: 50,
    width: 50,
    //backgroundColor: 'purple',
    //borderRadius:300,
  },
});
