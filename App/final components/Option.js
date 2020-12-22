import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, Image, ImageBackground, StatusBar, PickerIOSComponent, FlatList } from "react-native";
import { withOrientation } from "react-navigation";
import LandscapeView from 'react-native-landscape-view';
import * as ScreenOrientation from "expo-screen-orientation";
import { TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';
import { Container, Content, Icon, ListItem, Thumbnail } from 'native-base';
const bg_new = '.././assets/.new/main_bg.gif';

export default function Option({ navigation }) {

    useEffect(() => {
        const lock = ScreenOrientation.OrientationLock.LANDSCAPE
        ScreenOrientation.lockAsync(lock);



    });

    const [showMusic, setShowMusic] = useState(false);
    const [showSetting, setShowSetting] = useState(true);
    const [sound1, setSound1] = useState(new Audio.Sound());

    const status1 = () => {
        shouldPlay: false


    }

    const musicplay1 = async () => {

        await sound1.loadAsync(require('.././assets/track3.mp3'), status1, false)

    }

    const playmusic1 = () => {

        sound1.playAsync()


    }

    const pausemusic1 = () => {

        sound1.pauseAsync()


    }



    const profile = () => {

        navigation.navigate('Profile');
    }

    const feedback = () => {

        navigation.navigate('Feedback');
    }

    const about = () => {

        navigation.navigate('About');
    }

    const musicsetting = () => {

        setShowSetting(false)
        setShowMusic(true)
        musicplay1()
    }

    const settingoptions = (item) => {

        setShowSetting(false)
        if (item.key == '01') {
            setShowMusic(false)

            setShowSetting(true)

        }
        if (item.key == '02') {


            playmusic1()

        }
        if (item.key == '03') {

            pausemusic1()

        }

    }

    const settingflatlist =
        [
            { key: '01', src: require('.././assets/.new/options/settings.png') },
            { key: '02', src: require('.././assets/options/music.jpg') },
            { key: '03', src: require('.././assets/options/none.jpg') },

        ]


    { }

    return (
        <LandscapeView>
            <StatusBar hidden />
            <ImageBackground style={styles.container} source={require(bg_new)}>






                <View style={styles.background}>



                    <View style={styles.menucontainer}>
                        <TouchableHighlight
                            onPress={profile}
                            underlayColor='rgba(0, 0, 0, 0)'>

                            <Text style={styles.menutext}>Profile</Text>

                        </TouchableHighlight>




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
                </View>

                <View style={styles.background2}>

                    {showSetting ?

                        <TouchableOpacity onPress={musicsetting}>
                            <Image

                                style={styles.setting}
                                source={require('.././assets/.new/options/settings.png')} />
                        </TouchableOpacity> : null
                    }

                    {showMusic ?

                        <FlatList

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.settingflatlist}
                            data={settingflatlist}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => settingoptions(item)}>
                                    <Thumbnail

                                        style={styles.thumbnail}
                                        source={item.src} />
                                </TouchableOpacity>
                            )}

                        /> : null
                    }

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
    background: {
        justifyContent: 'center',
        flex: 4,
        backgroundColor: 'black',
        opacity: 0.7,

    },
    background2: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.7,

    },

    menucontainer: {
        alignSelf: 'center',

        // flex: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute',
        // alignSelf: 'flex-end',
        // position: 'absolute',
        // left: 10,


    },


    menutext: {

        // fontSize: 24,
        // fontWeight: "bold",
        // fontFamily: 'notoserif',
        // color: '#fffff0',
        // backgroundColor: 'pink',
        // width: 200,
        // paddingLeft: 20,
        // paddingTop: 5,
        // borderRadius: 15,
        // borderWidth: 4,
        // borderColor: '#fffff0',
        // marginVertical: 5,

        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 28,
        marginBottom: 16,
        fontFamily: 'Gloria',
        color: '#491d88',
        backgroundColor: 'rgba(240,240,240,0.9)',
        width: 280,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 8,

    },




    setting: {


        // borderWidth: 2,
        height: 60,
        width: 60,
        borderRadius: 300,
        backgroundColor: 'rgba(73, 29, 136,0.9)',


        left: 10,
        bottom: 10,




    },

    settingflatlist: {



        borderColor: 'white',
        borderRadius: 10,
        opacity: 1,
        left: 10,
        bottom: 10,


    },

    thumbnail: {

        borderWidth: 2,
        height: 60,
        width: 60,


        backgroundColor: 'purple',
        borderRadius: 300,
        marginHorizontal: 10,





    },



});