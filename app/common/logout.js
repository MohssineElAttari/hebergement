import React, { Component } from 'react';
import {
    View
} from 'react-native';
export default class SignOut extends Component { //component pour l'acceuil
    _logout() {
        console.log("logout");
        AsyncStorage.removeItem('app_token');
        this.props.navigation.navigate('Login');
    }
    componentDidMount() {
        this.props.navigation.setParams({ logout: this._logout.bind(this) });
    }
    render() { return(<View></View>); }
}