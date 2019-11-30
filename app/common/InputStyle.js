import React from 'react';
const { width: WIDTH } = Dimensions.get('window');
import { Text, View, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'rgb(255,255,255)',
        fontSize: 16,
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        paddingLeft: 40,
        marginHorizontal: 25,
        alignItems: 'center',
       
    },
    inputIcon: {
        position: "absolute",
        top: 8,
        left: 35,

    },
    inputContainer: {
        marginTop: 10,
        justifyContent: 'center',


    }
});


const InputStyle = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Icon name={props.name} size={props.size} color={props.color} style={styles.inputIcon} />
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                style={styles.TextInput}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText} />
            {props.children}
        </View>
    );
};

export { InputStyle };
//export default Card;