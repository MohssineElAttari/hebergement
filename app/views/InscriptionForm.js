import React, { Component } from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BackgroundScreen, InputStyle, Spinner, Logo, ButtonLogin } from '../common';
import { inscriptionUser } from '../actions';
import bgImage from '../res/background.jpg';
import logoSrc from '../res/boss.png';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Select Avatar',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'choose From gallery',
    quality: 1,

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
        backgroundColor: '#330066',
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
    }
});

class InscriptionForm extends Component {
    constructor() {
        super();
        this.state = {
            codeHebergement: '',
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
        }
        this.ImageURI = 'http://192.168.91.2/serveurHebergement/api/hebergement/uploads/images/Hebergement.png';

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

    // uploadPhoto() {
    //     RNFetchBlob.fetch('POST', 'http://192.168.91.2/serveurHebergement/api/hebergement/inscription.php', {
    //         Authorization: "Bearer access-token",
    //         otherHeader: "foo",
    //         'Content-Type': 'multipart/form-data',
    //     }, [
    //         // custom content type
    //         { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.logo },
    //     ]).then((resp) => {
    //         console.log(resp)
    //     }).catch((err) => {
    //         // ...
    //     })
    // }
    _onInscriptionPressed() {
        console.log(`etat : ${this.props.etat} , loading et : ${this.props.loading}`);
        const { codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, type, telephon, email, password } = this.state;
        this.props.inscriptionUser({ codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, type, telephon, email, password });
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
            <SafeAreaView style={{ flex: 1 }}>
                <BackgroundScreen src={bgImage}>
                    <Logo src={logoSrc} label="Inscription" />
                    <ScrollView>
                        <InputStyle
                            name='ios-barcode'
                            size={28}
                            color='rgb(255,255,255)'
                            placeholder='Code Hebergement'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            onChangeText={(codeHebergement) => this.setState({ codeHebergement })}
                        />
                        <InputStyle
                            name='ios-analytics'
                            size={28}
                            color='rgb(255,255,255)'
                            placeholder='Nom'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            onChangeText={(nom) => this.setState({ nom })}
                        />
                        <InputStyle
                            name='ios-flag'
                            size={28}
                            color='rgb(255,255,255)'
                            placeholder='Paye'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            onChangeText={(paye) => this.setState({ paye })}
                        />
                        <InputStyle
                            name='ios-home'
                            size={28}
                            color='rgb(255,255,255)'
                            placeholder='Ville'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            onChangeText={(ville) => this.setState({ ville })}
                        />
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
                        {/*                         
                        <InputStyle
                            name='ios-image'
                            size={28}
                            color='rgb(255,255,255)'
                            placeholder='logo'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            onChangeText={(logo) => this.setState({ logo })}
                        />
 */}
                        <Image style={styles.image}
                            source={this.state.imageSource != null ? this.state.imageSource :
                                { uri: this.ImageURI }} />
                        <TouchableOpacity style={styles.button} onPress={this.selectPhoto.bind(this)}>
                            <Text style={styles.text}>Select</Text>
                        </TouchableOpacity>
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

                    </ScrollView>
                    <Text style={styles.errorStyle}>{this.props.error}</Text>
                    {this._renderButton()}
                </BackgroundScreen>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.insc.error,
        loading: state.insc.loading,
        etat: state.insc.etat
    }
}

export default connect(mapStateToProps, { inscriptionUser })(InscriptionForm);