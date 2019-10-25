import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

class Splash extends Component {

  componentDidMount() {
    AsyncStorage.getItem('app_token')
      .then(token => {
        if (token) {
          this._navigate('Screen');
        } else {
          this._navigate('Login');
        }
      });
  }

  //Added this dummy method to cause a delay just to see the splash
  _navigate(screen) {
    setTimeout(() => {
      this.props.navigation.navigate(screen);
    }, 1000);

  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../res/heberger.png')} style={styles.image} />
        <ActivityIndicator size={'small'} />
        <Text style={styles.loadingText}>Loading ...</Text>
      </View>
    );
  }
}

export default Splash;