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
// Validate.js validates your values as an object
import validate from 'validate.js'

// const constraints = {
//   email: {
//     presence: {
//       message: "Cannot be blank."
//     },
//     email: {
//       message: 'Please enter a valid email address'
//     }
//   },
//   password: {
//     presence: {
//       message: "Cannot be blank."
//     },
//     length: {
//       minimum: 5,
//       message: 'Your password must be at least 5 characters'
//     }
//   }
// }

// const validator = (field, value) => {
//   // Creates an object based on the field name and field value
//   // e.g. let object = {email: 'email@example.com'}
//   let object = {}
//   object[field] = value

//   let constraint = constraints[field]
//   console.log(object, constraint)

//   // Validate against the constraint and hold the error messages
//   const result = validate(object, { [field]: constraint })
//   console.log(object, constraint, result)

//   // If there is an error message, return it!
//   if (result) {
//     // Return only the field error message if there are multiple
//     return result[field][0]
//   }

//   return null
// }

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
            passwordRepet: '',

            showPass: true,
            press: false,
            imageSource: null,
            data: null,
            type: null,

            nombreDeVide: 12,
            nombreError: 0,

            messageError: '',
            messageNom: '',
            messagePaye: '',
            messageVille: '',
            messageAdress: '',
            messageAdressMap: '',
            messageResponsable: '',
            messageDescription: '',
            messageLogo: '',
            messageTelephon: '',
            messageEmail: '',
            messagePassword: '',

            arrayErrors: [false, false, false, false, false, false, false, false, false, false, false, false],
        }
        this.ImageURI = '../res/boss.png';
        this.editeArrayErrors = [false, false, false, false, false, false, false, false, false, false, false, false];

    }
    controleDeValidation(text, Formule) {
        if (!(text.trim() == '')) {
            this.setState({
                nombreDeVide: this.state.nombreDeVide - 1,
            })
            if (Formule.test(text)) {
                console.log("le nombre de Error est :" + this.state.nombreError);
                return true;
            } else {
                console.log("le nombre de Error est :" + this.state.nombreError)
                return 'notCorrect';
            }
        }
        else if (text.trim() == '') {
            text.trim()
            console.log(text.length);
            this.setState({
                nombreDeVide: this.state.nombreDeVide + 1,
            })
            console.log("le nombre De Vide  est :" + this.state.nombreDeVide);
            return 'vide';
        }
    }

    _validate(text, type) {

        switch (type) {

            case 'nom':
                if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == true) {
                    this.editeArrayErrors[0] = true
                    this.setState({
                        nom: text,
                        messageNom: "",
                        // nombreError: 0,

                        arrayErrors: this.editeArrayErrors
                    })

                    console.log(true)
                } else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "notCorrect") {
                    this.editeArrayErrors[0] = false
                    this.setState({
                        messageNom: "la forme de nom note correct",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors,
                    })


                }
                else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "vide") {
                    this.editeArrayErrors[0] = false
                    this.setState({
                        messageNom: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors,
                    })


                }
                break;
            case 'paye':
                if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == true) {
                    this.editeArrayErrors[1] = true


                    this.setState({
                        paye: text,
                        messagePaye: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors

                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "notCorrect") {
                    this.editeArrayErrors[1] = false


                    this.setState({
                        messagePaye: "la forme de paye note correct",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors

                    })
                }
                else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "vide") {
                    this.editeArrayErrors[1] = false


                    this.setState({
                        messagePaye: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'ville':
                if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == true) {
                    this.editeArrayErrors[2] = true


                    this.setState({
                        ville: text,
                        messageVille: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors
                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "notCorrect") {
                    this.editeArrayErrors[2] = false


                    this.setState({
                        messageVille: "la forme de Ville note correct",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "vide") {
                    this.editeArrayErrors[2] = false


                    this.setState({
                        messageVille: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'adress':
                if (this.controleDeValidation(text, /^[a-zA-Z0-9\s,.'-]{10,}$/) == true) {
                    this.editeArrayErrors[6] = true


                    this.setState({
                        adress: text,
                        messageAdress: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors
                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^[a-zA-Z0-9\s,.'-]{10,}$/) == "notCorrect") {
                    this.editeArrayErrors[6] = false


                    this.setState({
                        messageAdress: "Not a valid Adress must contain\nat least ten characters",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                else if (this.controleDeValidation(text, /^[a-zA-Z0-9\s,.'-]{10,}$/) == "vide") {
                    this.editeArrayErrors[6] = false


                    this.setState({
                        messageAdress: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'adressMap':
                if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == true) {
                    this.editeArrayErrors[7] = true

                    this.setState({
                        adressMap: text,
                        messageAdressMap: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors
                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "notCorrect") {
                    this.editeArrayErrors[7] = false

                    this.setState({
                        messageAdressMap: "la forme de adress Map note correct",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "vide") {
                    this.editeArrayErrors[7] = false

                    this.setState({
                        messageAdressMap: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'responsable':
                if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == true) {
                    this.editeArrayErrors[3] = true

                    this.setState({
                        responsable: text,
                        messageResponsable: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors
                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "notCorrect") {
                    this.editeArrayErrors[3] = false

                    this.setState({
                        messageResponsable: "la forme de Responsable note correct",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                else if (this.controleDeValidation(text, /^[A-Za-z ]+$/) == "vide") {
                    this.editeArrayErrors[3] = false

                    this.setState({
                        messageResponsable: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'description':
                if (this.controleDeValidation(text, /^[a-zA-Z0-9\s,.'-]{10,}$/) == true) {
                    this.editeArrayErrors[5] = true
                    this.setState({
                        description: text,
                        messageDescription: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors
                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^[a-zA-Z0-9\s,.'-]{10,}$/) == "notCorrect") {
                    this.editeArrayErrors[5] = false
                    this.setState({
                        messageDescription: "Not a valid Description must contain\nat least ten characters",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                else if (this.controleDeValidation(text, /^[a-zA-Z0-9\s,.'-]{10,}$/) == "vide") {
                    this.editeArrayErrors[5] = false
                    this.setState({
                        messageDescription: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'telephon':
                if (this.controleDeValidation(text, /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) == true) {
                    this.editeArrayErrors[4] = true

                    this.setState({
                        telephon: text,
                        messageTelephon: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors
                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) == "notCorrect") {
                    this.editeArrayErrors[4] = false
                    this.setState({
                        messageTelephon: "please enter valid mobile number\nexp : 0666666666",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                else if (this.controleDeValidation(text, /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) == "vide") {
                    this.editeArrayErrors[4] = false
                    this.setState({
                        messageTelephon: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'email':
                if (this.controleDeValidation(text, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == true) {
                    this.editeArrayErrors[9] = true
                    this.setState({
                        email: text,
                        messageEmail: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors

                    })
                    console.log(true)
                } else if (this.controleDeValidation(text, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == "notCorrect") {
                    this.editeArrayErrors[9] = false
                    this.setState({
                        messageEmail: "la forme de Email note correct",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors

                    })
                }
                else if (this.controleDeValidation(text, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == "vide") {
                    this.editeArrayErrors[9] = false
                    this.setState({
                        messageEmail: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors

                    })
                }
                break;
            case 'password':
                if (this.controleDeValidation(text, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) == true && text.length >= 6) {
                    this.editeArrayErrors[10] = true

                    this.setState({
                        password: text,
                        messagePassword: "",
                        // nombreError: 0,
                        arrayErrors: this.editeArrayErrors

                    })
                    console.log(text.length)
                } else if (this.controleDeValidation(text, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) == "notCorrect" || text.length <= 6) {
                    this.editeArrayErrors[10] = false

                    this.setState({
                        messagePassword: "password must contain at least six \ncharacters,at least one number",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors

                    })
                }
                else if (this.controleDeValidation(text, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) == "vide") {
                    this.editeArrayErrors[10] = false

                    this.setState({
                        messagePassword: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
            case 'passwordRepet':
                if (this.controleDeValidation(text, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) == true && text.length >= 6) {
                    if (text != this.state.password) {
                        this.editeArrayErrors[11] = false

                        this.setState({
                            messagePasswordRepet: "Yours passwords do not match",
                            // nombreError: 1,
                            arrayErrors: this.editeArrayErrors
                        })
                    } else {
                        this.editeArrayErrors[11] = true
                        this.setState({
                            password: text,
                            messagePasswordRepet: "",
                            // nombreError: 0,
                            arrayErrors: this.editeArrayErrors
                        })
                    }

                    console.log(text.length)
                } else if (this.controleDeValidation(text, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) == "notCorrect" || text.length <= 6) {

                    this.editeArrayErrors[11] = false
                    this.setState({
                        messagePasswordRepet: "password must contain at least six \ncharacters,at least one number",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                else if (this.controleDeValidation(text, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) == "vide") {
                    this.editeArrayErrors[11] = false
                    this.setState({
                        messagePasswordRepet: "text is vide",
                        // nombreError: 1,
                        arrayErrors: this.editeArrayErrors
                    })
                }
                break;
        }
    }


    //   console.log( this.state.email)
    //   console.log( this.state.password)

    //   let emailError = validator('email', this.state.email)
    //   let passwordError = validator('password', this.state.password)
    //   console.log( emailError, passwordError)
    //   this.setState({
    //     emailError: emailError,
    //     passwordError: passwordError,
    //   })
    // }


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
                this.editeArrayErrors[8] = false
                this.setState({
                    messageLogo: "User cancelled image picker",
                    // nombreError: 1,
                    arrayErrors: this.editeArrayErrors
                })
                console.log('User cancelled image picker');
            } else if (response.error) {
                this.editeArrayErrors[8] = false
                this.setState({
                    messageLogo: "ImagePicker Error",
                    // nombreError: 1,
                    arrayErrors: this.editeArrayErrors
                })
                console.log('ImagePicker Error: ', response.error);
            } else {

                const source = { uri: response.uri };
                this.editeArrayErrors[8] = true
                this.setState({
                    imageSource: source,
                    logo: response.data,
                    type: response.type,
                    messageLogo: "",
                    // nombreError: 0,
                    arrayErrors: this.editeArrayErrors
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

    // focus() {
    //     this.ref.focus();
    // }


    render() {
        return (
            <Swiper nombreErrors={this.state.arrayErrors}>
                {/* First screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]} nombreScreens={1}>
                    <Icon name="ios-person" {...iconStyles} />
                    <Text style={styles.header}>information personnel</Text>
                    <InputStyle
                        name='ios-person'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Nom'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(nom) => { this._validate(nom, "nom") }}
                        autoFocus={true}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageNom ? this.state.messageNom : null}</Text>
                    <InputStyle
                        name='ios-flag'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Paye'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(paye) => { this._validate(paye, "paye") }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messagePaye ? this.state.messagePaye : null}</Text>
                    <InputStyle
                        name='ios-home'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Ville'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(ville) => { this._validate(ville, "ville") }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageVille ? this.state.messageVille : null}</Text>
                    <InputStyle
                        name='ios-contact'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='responsable'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(responsable) => { this._validate(responsable, 'responsable') }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageResponsable ? this.state.messageResponsable : null}</Text>
                </View>
                {/* Second screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]} nombreScreens={2}>
                    <Icon name="ios-person" {...iconStyles} />
                    <Text style={styles.header}>information personnel</Text>
                    <InputStyle
                        name='ios-call'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Telephon'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(telephon) => { this._validate(telephon, 'telephon') }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageTelephon ? this.state.messageTelephon : null}</Text>
                    <InputStyle
                        name='ios-book'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='description'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(description) => { this._validate(description, 'description') }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageDescription ? this.state.messageDescription : null}</Text>
                </View>
                {/* Third screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]} nombreScreens={3}>
                    <Icon name="ios-navigate" {...iconStyles} />
                    <Text style={styles.header}>Adress</Text>
                    <InputStyle
                        name='ios-at'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Adress'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(adress) => { this._validate(adress, 'adress') }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageAdress ? this.state.messageAdress : null}</Text>
                    <InputStyle
                        name='ios-link'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='adressMap'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(adressMap) => { this._validate(adressMap, 'adressMap') }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageAdressMap ? this.state.messageAdressMap : null}</Text>
                </View>
                {/* last screen */}
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]} nombreScreens={4}>
                    <Icon name="ios-cloud-upload" {...iconStyles} />
                    <Text style={styles.header}>Upload Image</Text>
                    <Image style={styles.image}
                        source={this.state.imageSource != null ? this.state.imageSource :
                            require('../res/attach.png')} />
                    <TouchableOpacity style={styles.button} onPress={this.selectPhoto.bind(this)}>
                        <Text style={styles.text}>Select</Text>
                    </TouchableOpacity>
                    <Text style={styles.errorStyle}>{this.state.messageLogo ? this.state.messageLogo : null}</Text>
                </View>
                <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]} nombreScreens={5}>
                    <Icon name="ios-unlock" {...iconStyles} />
                    <Text style={styles.header}>Authentification</Text>
                    <InputStyle
                        name='ios-person'
                        size={28}
                        color='rgb(255,255,255)'
                        placeholder='Email'
                        placeholderTextColor='rgba(255,255,255,0.8)'
                        onChangeText={(email) => { this._validate(email, 'email') }}
                    />
                    <Text style={styles.errorStyle}>{this.state.messageEmail ? this.state.messageEmail : null}</Text>
                    <InputStyle
                        name='ios-lock'
                        size={28}
                        color={'rgb(255,255,255)'}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        onChangeText={(password) => { this._validate(password, 'password') }}
                    >
                        <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                            <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgb(255,255,255)'} />
                        </TouchableOpacity>
                        <Text style={styles.errorStyle}>{this.state.messagePassword ? this.state.messagePassword : null}</Text>
                    </InputStyle>
                    <InputStyle
                        name='ios-lock'
                        size={28}
                        color={'rgb(255,255,255)'}
                        placeholder={'Repet password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        onChangeText={(passwordRepet) => { this._validate(passwordRepet, 'passwordRepet') }}
                    >
                        <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                            <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgb(255,255,255)'} />
                        </TouchableOpacity>
                    </InputStyle>
                    <Text style={styles.errorStyle}>{this.state.messagePasswordRepet ? this.state.messagePasswordRepet : null}</Text>
                    <ButtonLogin onPress={this._onInscriptionPressed.bind(this)}>Inscription</ButtonLogin>
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
        fontSize: 14,
        alignSelf: 'flex-start',
        color: 'red', marginLeft: 35
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
        backgroundColor: '#13679C',
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