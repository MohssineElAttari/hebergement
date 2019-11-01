import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
const { height: HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 30,
        height: null

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
});
const Logo = (props) => {
    return (
        <View style={styles.logoContainer}>
            <Image source={props.src} style={styles.logo}></Image>
            <Text style={styles.logoText}>{props.label}</Text>
        </View>
    );
};

export { Logo };