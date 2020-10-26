import React from 'react';
import { createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {Ionicons,FontAwesome,Feather,Foundation,AntDesign} from '@expo/vector-icons';
import {View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Signup from './components/Signup';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import ChangePasswordB from './components/ChangePasswordB';
import Main from './components/Main';
import About from './components/About';
import Feedback from './components/Feedback';
import CreateStory from './components/CreateStory';
import Sprite from './components/Sprite';
import Option from './components/Option';


import { createStackNavigator } from 'react-navigation-stack';




const screens = {

  Login: {
    screen: Login
  },

  Signup: {
    screen: Signup
  },

  
  ChangePassword: {
    screen: ChangePassword
  },

  ChangePasswordB: {
    screen: ChangePasswordB
  },

  Main: {
    screen: Main
  },

  Feedback: {
    screen: Feedback
  },

  About: {
    screen: About
  },

  CreateStory: {
    screen: CreateStory
  },

  Option: {
    screen: Option
  },
  
  
}

const navOptions = {
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}

const HomeStack = createStackNavigator(screens , navOptions);


export default createAppContainer(HomeStack);
