import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#010228',
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.35)',
    fontSize: 16,
  },
});

const ButtonLogin = (props) => {
  return (
    <TouchableOpacity style={styles.btnLogin} onPress={props.onPress}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}
export { ButtonLogin };
//export default Button;