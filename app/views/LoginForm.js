//import needed liberries

import React, { Component } from 'react';//pour cree les component
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';// output componenet (text,button,view...)
import { Button, CardItem, Input, Spinner, BackgroundScreen, Logo, InputStyle, ButtonLogin, TextLogin } from '../common';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import bgImage from '../res/juskteez.jpg';
import logoSrc from '../res/login.png';
import Icon from 'react-native-vector-icons/Ionicons'
import { bold } from 'ansi-colors';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 17,
        alignSelf: 'center',
        color: 'red'
    },
    btnEye: {
        position: "absolute",
        top: 8,
        right: 37
    },
});
//la creation du Componenet (class base componenet)

class LoginForm extends Component {//component pour le login

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            showPass: true,
            press: false,
        };
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

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.props.navigation.navigate('Screen');
        }
    }
    _onLoginPressed() {
        // console.log(`username is : ${this.state.username} and password is : ${this.state.password}`);
        const { username, password } = this.state;
        this.props.loginUser({ username, password });
    }
    _renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <ButtonLogin onPress={this._onLoginPressed.bind(this)}>Login</ButtonLogin>
        );
    }

    render() {
        return (
            <BackgroundScreen src={bgImage}>
                <Logo src={logoSrc} label="Login" />
                <InputStyle
                    name='ios-person'
                    size={28}
                    color='rgb(255,255,255)'
                    placeholder='Username'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    onChangeText={(username) => this.setState({ username })}
                />
                <InputStyle
                    name='ios-lock'
                    size={28}
                    color={'rgb(255,255,255)'}
                    placeholder={'Password'}
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={'rgba(255,255,255,0.8)'}
                    onChangeText={(password) => this.setState({ password })}
                >
                    <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgb(255,255,255)'} />
                    </TouchableOpacity>
                </InputStyle>
                {this._renderButton()}
                <Text style={styles.errorStyle}>{this.props.error}</Text>
                <TextLogin onPress={() => this.props.navigation.navigate('Inscription')} />
            </BackgroundScreen>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user
    }
}

//Export the component to be aviable for other
export default connect(mapStateToProps, { loginUser })(LoginForm);