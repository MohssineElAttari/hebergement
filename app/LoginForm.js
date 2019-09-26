//import needed liberries

import React, { Component } from 'react';//pour cree les component
import { Text, View } from 'react-native';// output componenet (text,button,view...)
import { Button, CardItem, Card, Input, Spinner } from './common';
import { connect } from 'react-redux';
import { loginUser } from './actions';
//la creation du Componenet (class base componenet)
class LoginForm extends Component {//component pour le login

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
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
            <Button onPress={this._onLoginPressed.bind(this)}>Login</Button>
        );
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input label='Email :'
                        placeholder='Entrer votre adresse email'
                        onChangeText={(username) => this.setState({ username })}
                    />
                </CardItem>
                <CardItem>
                    <Input secureTextEntry
                        label='Password :'
                        placeholder='Entrer votre mote de pass'
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardItem>
                <CardItem>
                    {this._renderButton()}
                </CardItem>
                <Text>incription</Text>
            </Card>
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