
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import LoginForm from './LoginForm';
import Splash from './Splash';

const RootNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: false,
            tabBarVisible: false,
            headerStyle: {
                backgroundColor: 'rgb(42, 55, 68)',
            },
        }
    }, Login: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Login',
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
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
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
    }
});
export default createAppContainer(RootNavigator);