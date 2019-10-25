
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Screen from './Screen';
// import Home from '';
import LoginForm from './views/LoginForm';
import Splash from './views/Splash';

const RootNavigator = createStackNavigator({
    Screen: {
        screen: Screen,
        // headerMode: 'none',
        navigationOptions: {
            // headerVisible: false,
            header: null
        }
    },
    Splash: {
        screen: Splash,
        navigationOptions: {
            // header: false,
            // tabBarVisible: false,
            // headerStyle: {
            //     backgroundColor: 'rgb(42, 55, 68)',
            // },
            header: null
        }
    }, Login: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Login',
            headerLeft: null,
            headerTitleStyle: {
                fontSize: 18,
                textAlign: "center",
                flex: 1,
            },
            tabBarVisible: false,
            headerStyle: {
                backgroundColor: '#4A94FB',
                borderBottomColor: 'transparent',
            },
            headerTintColor: 'white',
            headerBackTitle: null,
        },
    },
    Screen: {
        screen: Screen,
        // headerMode: 'none',
        navigationOptions: {
            // headerVisible: false,
            header: null
        }
    }
});
export default createAppContainer(RootNavigator);