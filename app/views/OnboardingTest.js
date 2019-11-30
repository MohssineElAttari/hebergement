import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(42, 55, 68)',
    },
    loadingText: {
        color: '#fff',
        fontSize: 20,
        paddingTop: 10
    },
    image: {
        width: 160,
        height: 160,
        marginBottom: 15
    }
});

class OnboardingTest extends Component {

    //   componentDidMount() {
    //     AsyncStorage.getItem('app_token')
    //       .then(token => {
    //         if (token) {
    //           this._navigate('Screen');
    //         } else {
    //           this._navigate('Login');
    //         }
    //       });
    //   }

    //Added this dummy method to cause a delay just to see the splash
    //   _navigate(screen) {
    //     setTimeout(() => {
    //       this.props.navigation.navigate(screen);
    //     }, 1000);

    //   }

    render() {
        return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image  />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image  />,
                        title: 'abdessamad',
                        subtitle: '',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image  />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image  />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        );
    }
}

export default OnboardingTest;