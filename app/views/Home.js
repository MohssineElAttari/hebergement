//import needed libraries
import React, { Component } from 'react'; //pour cree les component
import {
    View, Text, StyleSheet, FlatList, TouchableOpacity,
    RefreshControl
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import { connect } from 'react-redux';

// import { ListItem, Spinner } from './common';
// import { Button } from './common'

//creation Componenet (class base componenet)
class Home extends Component { //component pour l'acceuil
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        const headerRight = (
            <TouchableOpacity
                onPress={params.logout}>
                <Text>logout</Text>
            </TouchableOpacity>
        );

        return { headerRight };
    };

    componentDidMount() {
        this.props.navigation.setParams({ logout: this._logout.bind(this) });
    }

    _logout() {
        console.log("logout");
        AsyncStorage.removeItem('app_token');
        this.props.navigation.navigate('Login');
    }

    _onLoginPressed() { // function pressed
        this.props.navigation.navigate('Login');
        console.log('Login');
    }

    //function main in the component
    render() {
        return (
            <Text>
                Home
            </Text>
        );
    }
}

//Style in the componenet
const styles = StyleSheet.create({
    view: {
        marginLeft: 20,
        marginRight: 20,
        borderColor: "#007aff",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'stretch'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#00a700',
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    }
});

//Export the component to be aviable for other

export default Home;