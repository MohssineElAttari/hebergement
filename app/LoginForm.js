//import needed liberries

import React, { Component } from 'react';//pour cree les component
import { Text, View } from 'react-native';// output componenet (text,button,view...)
import { Button, CardItem, Card,Input } from './common';
//la creation du Componenet (class base componenet)
class LoginForm extends Component {//component pour le login
    render() {
        return (
            <Card>
                 <CardItem>
                    <Input label='Email :' placeholder='Entrer votre adresse email'/>
                </CardItem>
                <CardItem>
                    <Input secureTextEntry={true} label='Password :' placeholder='Entrer votre mote de pass'/>
                </CardItem>
                <CardItem>
                    <Button>
                        Login
                    </Button>
                </CardItem>
                <Text>incription</Text>
            </Card>
        );
    }
}

//Export the component to be aviable for other

export default LoginForm;