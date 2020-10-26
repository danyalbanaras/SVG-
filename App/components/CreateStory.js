import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, FlatList, ScrollView, TouchableWithoutFeedback } from "react-native";
import { withOrientation } from "react-navigation";
import LandscapeView from 'react-native-landscape-view';
import { Container, Content, Icon, ListItem, Thumbnail } from 'native-base';
import { Audio } from 'expo-av';
import Draggable from '.././components/Draggable';
import Draggable_In from '.././components/Draggable_In';
//import { ScreenRecorderManager } from 'react-native-screen-recorder'
//import RecordScreen from 'react-native-record-screen'

//import Sprite_fn from '.././components/Sprite_fn';
import { TouchableOpacity } from "react-native";
import Sprite_fn from '.././components/Sprite_fn';
import Sprite from '.././components/Sprite';
import Sprite2 from '.././components/Sprite2';
import Sprite3 from '.././components/Sprite3';
import Sprite4 from '.././components/Sprite4';
import Sprite5 from '.././components/Sprite5';
import Sprite6 from '.././components/Sprite6';
import Sprite7 from '.././components/Sprite7';
import Sprite8 from '.././components/Sprite8';
import Sprite9 from '.././components/Sprite9';
import Sprite10 from '.././components/Sprite10';
import Sprite11 from '.././components/Sprite11';
import Sprite12 from '.././components/Sprite12';
import { getAppLoadingLifecycleEmitter } from "expo/build/launch/AppLoading";






export default function CreateStory({ navigation }) {
    const sunSprite = require('.././assets/characters/GIF25.gif');

    const sound = new Audio.Sound()
    //sound.loadAsync(require('.././assets/track3.mp3'), status, false)

    
    const [text, setText] = useState('');
    const [showHelp, setShowHelp] = useState(false);
    const [showMusic, setShowMusic] = useState('');
    const [showCharacter, setShowCharacter] = useState(false);
    const [showObject, setShowObject] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [background, setBackground] = useState(require('.././assets/mainflatlist/background8.jpg'));
    const [flatlistadjustment, setFlatlistadjustment] = useState(190);

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



    const status = () => {

        shouldPlay: false
    }

    const playmusic = () => {

        sound.playAsync()


    }

    const pausemusic = () => {

        sound.pauseAsync()


    }


    const textHandler = text => {
        
        setText(text);
        

    }

    const generateStory = () =>{
       
        
        var a = text.includes('beach')
        var b = text.includes( 'jungle')
        var c = text.includes('city')
        var d = text.includes('river')
        var e = text.includes('night')
        var f = text.includes(  'raining' || 'rain' || 'rainy')

        var oa = text.includes('basketball')
        var ob = text.includes('football')
        var oc = text.includes('book')
        var od = text.includes('umberella')
        var oe = text.includes('horse')
        var og = text.includes('lion' )

        
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
        if (b && e && f){
            setBackground(require('.././assets/background/gifs/forest_night_rain.gif'));
        }
        else if (b && e){
            setBackground(require('.././assets/background/gifs/forest_night_sunny.jpg'));
        }
        else if (b && f){
            setBackground(require('.././assets/background/gifs/forest_day_rain.gif'));
        }
        else if (b){
            setBackground(require('.././assets/background/gifs/forest_day_sunny.jpg'));
        }
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

         if (oa){
            setObject1(true)

        }
        if (ob){
            setObject2(true)

        }
        if (oc){
            setObject3(true)

        }
        if (od){
            setObject4(true)

        }
        if (oe){
            setCharacter3(true)

        }
        if (og){
            setCharacter2(true)

        }


    }

    const closeText = () => {
        setShowText(false);

    }

    const closeHelp = () => {
        setShowHelp(false)
        setFlatlistadjustment(15)

        setShowText(true)

        
    }

    const mainlistoptions = (item) => {
        console.log('Selected Item :', item);
        if (item.key == '01') {

            //ScreenRecorderManager.start()
            setShowBackground(true)
            //RecordScreen.startRecording().catch((error) => console.error(error));

        }

        if (item.key == '02') {
            //RecordScreen.startRecording().catch((error) => console.error(error));
            //ScreenRecorderManager.stop()
            //alert('file saved')
            setShowCharacter(true)

        }
        if (item.key == '03') {


            setShowObject(true)

        }

        if (item.key == '04') {
            setFlatlistadjustment(15)


            setShowText(true)

        }

        if (item.key == '05') {


            setShowMusic(true)

        }


        // if (item.key == '05') {

        //   console.log("yner");
        // playmusic();

        //}
    }

    const changeCharacter = (item) => {
        if (item.key == '01') {


            setShowCharacter(false)

        }
        if (item.key == '02') {


            setCharacter1(true)

        }
        if (item.key == '03') {


            setCharacter2(true)

        }
        if (item.key == '04') {


            setCharacter3(true)

        }
        if (item.key == '05') {


            setCharacter4(true)

        }
        if (item.key == '06') {


            setCharacter5(true)

        }
        if (item.key == '07') {


            setCharacter6(true)

        }

    }

    const changeObject = (item) => {
        if (item.key == '01') {


            setShowObject(false)

        }
        if (item.key == '02') {


            setObject1(true)

        }
        if (item.key == '03') {


            setObject2(true)

        }
        if (item.key == '04') {


            setObject3(true)

        }
        if (item.key == '05') {


            setObject4(true)

        }
        if (item.key == '06') {


            setObject5(true)

        }

        if (item.key == '07') {


            setObject6(true)

        }
    }

    const changeMusic = (item) => {
        if (item.key == '01') {


            setShowMusic(false)

        }

        if (item.key == '02') {



            playmusic();

        }

        if (item.key == '03') {



            pausemusic();

        }
    }

    const generateImage = (item) => {
        if (item.key == '01') {

            generateStory()


            
        }

        if (item.key == '02') {
            setFlatlistadjustment(190)
            setShowText(false)


            setShowHelp(true)


        }
        if (item.key == '03') {
            setFlatlistadjustment(190)


            setShowText(false)


        }

        
    }



    const changeBackground = (item) => {
        if (item.key == '01') {


            setShowBackground(false)

        }
        if (item.key == '02') {

            setBackground(require(".././assets/background/background1.jpg"));

        }
        if (item.key == '03') {

            setBackground(require(".././assets/background/background2.jpg"));

        }
        if (item.key == '04') {

            setBackground(require(".././assets/background/background3.jpg"));

        }
        if (item.key == '05') {

            setBackground(require(".././assets/background/background4.jpg"));

        }

        if (item.key == '06') {

            setBackground(require(".././assets/background/background5.jpg"));

        }

        if (item.key == '07') {

            setBackground(require(".././assets/background/background6.jpg"));

        }

        if (item.key == '08') {

            setBackground(require(".././assets/background/background7.jpg"));

        }

        if (item.key == '09') {

            setBackground(require(".././assets/background/background8.jpg"));

        }

        if (item.key == '10') {

            setBackground(require(".././assets/background/background9.jpg"));

        }

        if (item.key == '11') {

            setBackground(require(".././assets/background/background10.jpg"));

        }

        if (item.key == '12') {

            setBackground(require(".././assets/background/background11.jpg"));

        }

    }





    const mainflatlist =
        [
            { key: '01', src: require('.././assets/mainflatlist/background8.jpg') },
            { key: '02', src: require('.././assets/mainflatlist/character1.jpg') },
            { key: '03', src: require('.././assets/mainflatlist/object1.jpg') },
            { key: '04', src: require('.././assets/mainflatlist/text.jpg') },
            { key: '05', src: require('.././assets/mainflatlist/music.jpg') },
            { key: '06', src: require('.././assets/mainflatlist/record.jpg') },
            { key: '07', src: require('.././assets/mainflatlist/delete.jpg') },
            //  { key: '08', src: require('.././assets/mainflatlist/generate.jpg') },

        ]

    const backgroundflatlist =
        [
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


        ]
    const characterflatlist =
        [
            { key: '01', src: require('.././assets/background/close.jpg') },
            { key: '02', src: require('.././assets/characters/character1-edited.jpg') },
            { key: '03', src: require('.././assets/characters/character4.jpg') },
            { key: '04', src: require('.././assets/characters/character5.jpg') },
            { key: '05', src: require('.././assets/characters/character7-edited.jpg') },
            { key: '06', src: require('.././assets/characters/character8.jpg') },
            { key: '07', src: require('.././assets/characters/character9.jpg') },



        ]

    const objectflatlist =
        [
            { key: '01', src: require('.././assets/background/close.jpg') },
            { key: '02', src: require('.././assets/objects/object1.jpg') },
            { key: '03', src: require('.././assets/objects/object2.jpg') },
            { key: '04', src: require('.././assets/objects/object3.jpg') },
            { key: '05', src: require('.././assets/objects/object4.jpg') },
            { key: '06', src: require('.././assets/objects/object5.jpg') },
            { key: '07', src: require('.././assets/objects/object6.jpg') },



        ]

    const musicflatlist =
        [
            { key: '01', src: require('.././assets/background/close.jpg') },
            { key: '02', src: require('.././assets/objects/music1.jpg') },
            { key: '03', src: require('.././assets/objects/none.jpg') },




        ]
    const textflatlist =
        [
            { key: '01', src: require('.././assets/mainflatlist/generate.jpg') },
            {key: '02', src: require('.././assets/mainflatlist/help.jpg') },
            { key: '03', src: require('.././assets/mainflatlist/close.jpg') },
            





        ]

        const helpflatlist =
        [   { key: '01', title:"CHARACTERS" },
            { key: '02', title:"Horse" },
            {key: '03', title:"Lion" },
            { key: '04',title: "Elephant" },
            { key: '05',title: "Fox" },
            { key: '06',title: "Wolf" },
            





        ]


    return (

        <LandscapeView >


            <StatusBar hidden />









            <ImageBackground style={styles.container} source={background}>





                <View style={styles.container1} >
                    {character1 ?

                        <Draggable sprite={sunSprite} /> : null






                    }

                    {character2 ?
                        <Sprite2 /> : null


                    }
                    {character3 ?
                        <Sprite3 /> : null


                    }
                    {character4 ?
                        <Sprite4 /> : null


                    }

                    {character5 ?
                        <Sprite5 /> : null


                    }

                    {character6 ?
                        <Sprite6 /> : null


                    }

                    {object1 ?
                        <Sprite7 /> : null


                    }
                    {object2 ?
                        <Sprite8 /> : null


                    }
                    {object3 ?
                        <Sprite9 /> : null


                    }
                    {object4 ?
                        <Sprite10 /> : null


                    }

                    {object5 ?
                        <Sprite11 /> : null


                    }

                    {object6 ?
                        <Sprite12 /> : null


                    }




                    {showText ?

                        <TextInput
                            style={styles.textbox}
                            textAlignVertical={"top"}
                            multiline={true}
                            placeholder="Enter Text"
                            placeholderTextColor="white"
                            onChangeText={textHandler}

                        /> : null

                    }

                    
{showHelp ?
<View style ={styles.help}>
                        <FlatList

                            //horizontal={true}
                            //showsHorizontalScrollIndicator={false}
                            style={styles.helpflatlist}
                            data={helpflatlist}
                            renderItem={({ item }) => (
                                <Text
                                style = {styles.thumbnailhelp}>
                                
                                {item.title}
                                </Text>
                                
                                   
                                
                                
                            )}

                        /> 


<TouchableOpacity onPress = {closeHelp} >
                                    <Thumbnail

                                        style={styles.thumbnailmusic}
                                        source={require('.././assets/mainflatlist/close.jpg')} />
                                </TouchableOpacity>
                        </View>: null
                    }
                </View>













                <View>





                {showText ?
                        <FlatList

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.textflatlist}
                            data={textflatlist}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => generateImage(item)}>
                                    <Thumbnail

                                        style={styles.thumbnailtext}
                                        source={item.src} />
                                </TouchableOpacity>
                            )}

                        /> : null
                    }



                    {showBackground ?

                        <FlatList

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={[styles.backgroundflatlist,{marginTop:flatlistadjustment}]}
                            data={backgroundflatlist}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => changeBackground(item)}>
                                    <Thumbnail

                                        style={styles.thumbnailbackground}
                                        source={item.src} />
                                </TouchableOpacity>
                            )}

                        /> : null
                    }

                    {showCharacter ?

                        <FlatList

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={[styles.characterflatlist, {marginTop:flatlistadjustment}]}
                            data={characterflatlist}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => changeCharacter(item)}>
                                    <Thumbnail

                                        style={styles.thumbnailcharacter}
                                        source={item.src} />
                                </TouchableOpacity>
                            )}

                        /> : null
                    }

                    {showObject ?

                        <FlatList

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={[styles.objectflatlist,{marginTop:flatlistadjustment}]}
                            data={objectflatlist}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => changeObject(item)}>
                                    <Thumbnail

                                        style={styles.thumbnailobject}
                                        source={item.src} />
                                </TouchableOpacity>
                            )}

                        /> : null
                    }

                    {showMusic ?

                        <FlatList

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={[styles.musicflatlist,{marginTop:flatlistadjustment}]}
                            data={musicflatlist}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => changeMusic(item)}>
                                    <Thumbnail

                                        style={styles.thumbnailmusic}
                                        source={item.src} />
                                </TouchableOpacity>
                            )}

                        /> : null
                    }


                    <FlatList

                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{height:90,marginTop:flatlistadjustment}}
                        data={mainflatlist}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => mainlistoptions(item)}>
                                <Thumbnail

                                    style={styles.thumbnail}
                                    source={item.src} />
                            </TouchableOpacity>
                        )}

                    />









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

    textcontainer: {
        height: 500,
        marginLeft: 390,
        width: 250,

    },


    mainflatlist: {

        height: 70,
       // marginTop: flatlistadjustment,


    },

    backgroundflatlist: {

        height: 65,
        width: 360,
        //marginTop: 190,
        borderColor: 'white',
        backgroundColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        opacity: 0.8











    },

    characterflatlist: {

        height: 65,
        width: 360,
        //marginTop: 190,
        borderColor: 'white',
        backgroundColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        opacity: 1











    },


    objectflatlist: {

        height: 65,
        width: 360,
        //marginTop: 190,
        borderColor: 'white',
        backgroundColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        opacity: 1,











    },

    musicflatlist: {

        height: 65,
        width: 190,
        //marginTop: 190,
        borderColor: 'white',
        backgroundColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        opacity: 1

    },

    textflatlist: {

        height: 65,
        width: 190,
        //marginTop: 190,
        borderColor: 'white',
        //backgroundColor: 'pink',
        borderWidth: 0,
        borderRadius: 10,
        opacity: 1,
        marginTop: 110,
        marginBottom:0,
        marginLeft:430,


    },

    thumbnail: {

        justifyContent: 'center',
        marginHorizontal: 10,
        borderColor: 'pink',
        borderWidth: 5,
        borderRadius: 200,
        margin: 10,
        height: 50,
        width: 50,
        backgroundColor: 'purple',



    },

    thumbnailbackground: {

        justifyContent: 'center',
        marginHorizontal: 5,

        borderColor: 'white',
        borderWidth: 2,

        marginTop: 5,
        height: 50,
        width: 50,
        backgroundColor: 'purple',




    },


    thumbnailcharacter: {

        justifyContent: 'center',
        marginHorizontal: 5,

        borderColor: 'white',
        borderWidth: 2,

        marginTop: 5,
        height: 50,
        width: 50,
        backgroundColor: 'purple',




    },

    thumbnailobject: {

        justifyContent: 'center',
        marginHorizontal: 5,

        borderColor: 'white',
        borderWidth: 2,

        marginTop: 5,
        height: 50,
        width: 50,
        backgroundColor: 'purple',




    },

    thumbnailmusic: {

        justifyContent: 'center',
        marginHorizontal: 5,

        borderColor: 'white',
        borderWidth: 2,

        marginTop: 5,
        height: 50,
        width: 50,
        backgroundColor: 'purple',




    },

    //home:{
    // marginRight:100,
    //  marginBottom:100,

    //},

    //thumbnailhome: {

    //  justifyContent: 'center',
    // marginHorizontal: 5,

    //borderColor: 'pink',
    //borderWidth: 4,
    //borderColor: 'pink',

    //      height: 50,
    //    width: 50,
    //  backgroundColor: 'purple',




    //},

 


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

    textbox: {
        backgroundColor: 'transparent',
        height: 180,
        width: 180,
        color: 'white',

        marginTop: 20,
        marginLeft: 420,
        marginBottom: 0,

        fontSize: 17,
        padding: 8,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: '#FFB6C1',
        opacity: 0.9,

    },

    help: {
        backgroundColor: 'transparent',
        height: 220,
        width: 180,
        
        
       
        marginLeft: 450,
        marginTop:40,
        //marginBottom: 150,

        //fontSize: 17,
        //padding: 8,
        borderRadius: 4,
        borderWidth: 0,
       // borderColor: 'black',
        //backgroundColor: 'black',
        opacity: 1,

    },

    helpflatlist: {

        height: 2,
        width: 170,
        //marginTop: 190,
        borderColor: 'white',
        backgroundColor: '#FFB6C1',

        borderWidth: 4,
        borderRadius: 10,
        opacity: 0.8











    },

    thumbnailhelp: {

        justifyContent: 'center',
        
        //marginLeft:500,

        //borderColor: 'pink',
        //borderWidth: 4,
       //borderColor: 'black',
        color:'white',
        fontSize:20,
        paddingLeft:5,
       

        
        height: 50,
        width: 150,
        //backgroundColor: 'purple',




    },





    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    }



});