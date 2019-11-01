import React, { Component } from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { BackgroundScreen, InputStyle, Logo, ButtonLogin } from '../common';
import { inscriptionUser } from '../actions';
import bgImage from '../res/background.jpg';
import logoSrc from '../res/boss.png';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'
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

class Inscription extends Component {
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
        }
    }
    _onInscriptionPressed() {
        // console.log(`codeHebergement is : ${this.state.codeEbergement} , nom is : ${this.state.nom} , paye is : ${this.state.paye} , ville is : ${this.state.ville} , adress is : ${this.state.adress} , adressMap is : ${this.state.adressMap} , responsable is : ${this.state.responsable} , description is : ${this.state.description} , logo is : ${this.state.logo} , telephon is : ${this.state.telephon} , email is : ${this.state.email} , password is : ${this.state.password} `);
        const { codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, telephon, email, password } = this.state;
        this.props.inscriptionUser({ codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, telephon, email, password });

    }
    _renderButton() {
        // if (this.props.loading) {
        //     return <Spinner />;
        // }
        return (
            <ButtonLogin onPress={this._onInscriptionPressed.bind(this)}>Inscription</ButtonLogin>
        );
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
                        <InputStyle
                            name='ios-image'
                            size={28}
                            color='rgb(255,255,255)'
                            placeholder='logo'
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            onChangeText={(logo) => this.setState({ logo })}
                        />
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
                    {this._renderButton()}
                </BackgroundScreen>

            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { inscriptionUser })(Inscription);