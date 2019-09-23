
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import LoginForm from './LoginForm';
const RootNavigator = createStackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions : () => ({
            title: 'Login',
            headerTitleStyle: { // style header
                textAlign: 'center',
                flexGrow:1, // wheith
                alignSelf:'center',
                fontWeight: 'bold'
            },
        }),
    },
    Home: {
        screen: Home,
        navigationOptions :{
            title: 'Home', // title header

            // // header: null, //  hide header

            headerTitleStyle: { // style header
                textAlign: 'center',
                flexGrow:1, // wheith
                alignSelf:'center',
                fontWeight: 'bold'
            },
        },
    }
});
export default createAppContainer(RootNavigator);