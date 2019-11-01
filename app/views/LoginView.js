import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import bgImage from '../res/juskteez.jpg';
import logo from '../res/login.png';
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { bold } from 'ansi-colors';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroungContainer: {
        height:HEIGHT,
        flex: 1,
        alignItems: 'center',
        width: null,
        justifyContent:'center',

    },
    logoContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 30,
        height:HEIGHT-500

    },
    logo: {
        width: 80,
        height: 80,
    },
    logoText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        fontWeight: 'bold'
    },
    TextInput: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'rgba(255,255,255,0.35)',
        fontSize: 16,
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        paddingLeft: 35,
        marginHorizontal: 25,
    },
    inputIcon: {
        position: "absolute",
        top: 8,
        left: 35
    },
    inputContainer: {
        marginTop: 10,
        justifyContent:'center',
        
    },
    btnEye: {
        position: "absolute",
        top: 8,
        right: 37
    }, btnLogin: {
        backgroundColor: '#010228',
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        justifyContent: "center",
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        color: 'rgba(255,255,255,0.35)',
        fontSize: 16,
    },
    authContainer: {
        marginTop: 30,
        flex: 1,
        flexDirection: "row"
    },
    btnAuth: {
        fontWeight: 'bold'
    }
});
export default class LoginView extends Component {
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false,
        }
    }
    showPass = () => {
        if (this.state.press == false) {
            this.setState({
                showPass: false, press: true,
            })
        }
        else
            this.setState({
                showPass: true, press: false,
            })
    }
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroungContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}></Image>
                    <Text style={styles.logoText}>LOGIN</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='ios-person' size={28} color={'rgb(255,255,255)'} style={styles.inputIcon} />
                    <TextInput
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        style={styles.TextInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='ios-lock' size={28} color={'rgb(255,255,255)'} style={styles.inputIcon} />
                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        style={styles.TextInput}
                    />
                    <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgb(255,255,255)'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.authContainer}>
                    <Text style={styles.auth}>don't have account ? </Text>
                    <TouchableOpacity><Text style={styles.btnAuth}>Sign up !</Text></TouchableOpacity>
                </View>
            </ImageBackground>)
    }
}
