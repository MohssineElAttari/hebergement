import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
const styles = StyleSheet.create({
    authContainer: {
        marginTop: 30,
        flex: 1,
        flexDirection: "row"
    },
    btnAuth: {
        fontWeight: 'bold'
    }
});

const TextLogin = (props) => {
    return (
        <View style={styles.authContainer}>
            <Text>don't have account ? </Text>
            <TouchableOpacity onPress={props.onPress}><Text style={styles.btnAuth}>Sign up !</Text></TouchableOpacity>
        </View>
    );
}
export { TextLogin };
//export default Button;