import React, { Component } from 'react';
import {
    StyleSheet,    // CSS-like styles
    Text,         // Renders text
    View,        // Container component
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from './Swiper';
import { BackgroundScreen, InputStyle, Spinner, Logo, ButtonLogin } from '../common';
import { inscriptionUser } from '../actions';
import bgImage from '../res/background.jpg';
import logoSrc from '../res/boss.png';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'choose From gallery',
    quality: 1,

};
export default class Screens extends Component {
    constructor() {
        super();
        this.state = {
            nom: '',
            paye: '',
            ville: '',
            adress: '',
            adressMap: '',
            responsable: '',
            description: '',
            logo: '',
            telephon: '',
            email: '',
            password: '',
            showPass: true,
            press: false,
            imageSource: null,
            data: null,
            type: null,
            nombreError: 0,
        }
        this.ImageURI = '../res/boss.png';

    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.etat) {
            console.log(`etat : ${this.props.etat} , loading et : ${this.props.loading}`);
            this.props.navigation.navigate('Login');
        }
    }
    selectPhoto() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageSource: source,
                    logo: response.data,
                    type: response.type
                });
            }
        });
    }

    _onInscriptionPressed() {
        console.log(`etat : ${this.props.etat} , loading et : ${this.props.loading}`);
        const { nom, paye, ville, adress, adressMap, responsable, description, logo, type, telephon, email, password } = this.state;
        this.props.inscriptionUser({ nom, paye, ville, adress, adressMap, responsable, description, logo, type, telephon, email, password });
    }
    _renderButton() {
        if (this.props.loading) {
            return <Spinner />;

        }
        return (
            <ButtonLogin onPress={this._onInscriptionPressed.bind(this)}>Inscription</ButtonLogin>
        );
    }
    showPass = () => {
        if (this.state.press == false) {
            console.log("1 -press est : " + this.state.press + " show : " + this.state.showPass);
            this.setState({
                showPass: false, press: true,
            })
        }
        else {
            console.log("2 - press est : " + this.state.press + " show : " + this.state.showPass);

            this.setState({
                showPass: true, press: false,
            })
        }

    }
    render() {
        return (
            <Swiper nombreErrors={this.state.nombreError}>
                {/* First screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
                    <Icon name="ios-person" {...iconStyles} />
                    <Text style={styles.header}>information personnel</Text>
                    <InputStyle
                        name='ios-person'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Nom'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(nom) => this.setState({
                            nombreError: 1,
                        })}
                    />
                    <InputStyle
                        name='ios-flag'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Paye'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={
                            console.log("nobre Errors :" + this.state.nombreError)}
                    />
                    <InputStyle
                        name='ios-home'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Ville'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(ville) => this.setState({
                            nombreError: 2,
                        })}
                    />
                    <InputStyle
                        name='ios-contact'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='responsable'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(responsable) => this.setState({ responsable })}
                    />
                    <InputStyle
                        name='ios-book'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='description'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(description) => this.setState({ description })}
                    />
                </View>
                {/* Second screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
                    <Icon name="ios-navigate" {...iconStyles} />
                    <Text style={styles.header}>Adress</Text>
                    <InputStyle
                        name='ios-at'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Adress'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(adress) => this.setState({ adress })}
                    />
                    <InputStyle
                        name='ios-link'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='adressMap'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(adressMap) => this.setState({ adressMap })}
                    />

                </View>
                {/* Third screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
                    <Icon name="ios-cloud-upload" {...iconStyles} />
                    <Text style={styles.header}>Upload Image</Text>
                    <Image style={styles.image}
                        source={this.state.imageSource != null ? this.state.imageSource :
                            require('../res/attach.png')} />
                    <TouchableOpacity style={styles.button} onPress={this.selectPhoto.bind(this)}>
                        <Text style={styles.text}>Select</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
                    <Icon name="ios-unlock" {...iconStyles} />
                    <Text style={styles.header}>Authentification</Text>
                    <InputStyle
                        name='ios-call'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Telephon'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(telephon) => this.setState({ telephon })}
                    />
                    <InputStyle
                        name='ios-person'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Email'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(email) => this.setState({ email })}
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
                </View>
            </Swiper>
        );
    }
}

const iconStyles = {
    size: 100,
    color: '#FFFFFF',
};

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
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#48a9d4',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 25,
    },
    image: {
        height: 200,
        width: 200,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    // Slide styles
    slide: {
        flex: 1,                    // Take up all screen
        // justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    // Text below header
    text: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'center',
    },
});