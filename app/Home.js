//import needed libraries
import React, { Component } from 'react'; //pour cree les component
import { View, StyleSheet } from 'react-native'; // output componenet (text,button,view...)
import Button from './common/Button'
//creation Componenet (class base componenet)

class Home extends Component { //component pour l'acceuil

    _onLoginPressed() { // function pressed
        this.props.navigation.navigate('Login');
        console.log('Login');
    }

    //function main in the component
    render() {
        return (
            <View style={styles.view}>
                <Button onPress={this._onLoginPressed.bind(this)}>
                    Login
                </Button>
            </View>
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