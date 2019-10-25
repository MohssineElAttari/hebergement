import React from 'react';
import ItemDrawer from '../views/ItemDrawer';
import { View, Text, StyleSheet } from 'react-native';

const Suggestions = ({ navigation }) => {
    return (
        <ItemDrawer navigation={navigation} name="Suggestions" />
    );
}
export { Suggestions };