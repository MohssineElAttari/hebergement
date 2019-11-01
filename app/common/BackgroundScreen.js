import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
    backgroungContainer: {
        height: null,
        flex: 1,
        alignItems: 'center',
        width: null,
        justifyContent: 'center',
       paddingBottom:30
    },
});


const BackgroundScreen = (props) => {
    return (

        <ImageBackground source={props.src} style={styles.backgroungContainer}>
            {props.children}
        </ImageBackground>
    );
};

export { BackgroundScreen };
//export default Card;