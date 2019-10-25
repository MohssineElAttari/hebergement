/* @flow */

import React, { Component } from "react";
import { StyleSheet } from 'react-native';
// import { Right } from 'native-base';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Menu, Consilles, AudioQestions, Langues, Suggestions } from "./screen";
import SideBar from "./screen/SideBar";
// import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

const logOut = (props) =>
  props.navigation.navigate('Login');

const Screen = createDrawerNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: "Menu",
        drawerIcon: ({ tintColor }) => <FeatherIcon name='file-text' color={tintColor} />
      }
    },
    Consilles: {
      screen: Consilles,
      navigationOptions: {
        title: "Consilles",
        drawerIcon: ({ tintColor }) => <FeatherIcon name='monitor' color={tintColor} />
      }
    },
    AudioQestions: {
      screen: AudioQestions,
      navigationOptions: {
        title: "AudioQestions",
        drawerIcon: ({ tintColor }) => <FeatherIcon name='headphones' color={tintColor} />
      }
    },
    Suggestions: {
      screen: Suggestions,
      navigationOptions: {
        title: "Suggestions",
        drawerIcon: ({ tintColor }) => <FeatherIcon name='alert-circle' color={tintColor} />
      }
    }, SignOut: {
      screen: logOut,
      navigationOptions: {
        title: "SignOut",
        drawerIcon: ({ tintColor }) => <FeatherIcon name='log-out' color={tintColor} />
      }
    }
  },
  {
    contentComponent: props => <SideBar {...props} />,
    hideStatusBar: true,
    contentOptions: {
      activeBackgroundColor: "rgba(212,118,207,0.2)",
      activeTintColor: "#53115B",
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontale: 20,
      },
      itemStyle: {
        borderRadius: 8
      }
    }
  }
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFF"
//   }
// });

export default Screen;