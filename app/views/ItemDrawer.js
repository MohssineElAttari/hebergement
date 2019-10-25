import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500'
    }
});

export default class ItemDrawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                    <FontAwesome5 name='bars' size={20} color="#333" />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.text}>
                            {this.props.name} Screen
                        </Text>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}
