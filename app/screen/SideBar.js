import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import { DrawerItems } from 'react-navigation-drawer';
// import IonIcon from 'react-native-vector-icons/Ionicons';
export default SideBar = props => (
    <ScrollView>
        <ImageBackground
            source={require("../res/background.jpg")}
            style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
            <Image
                source={require("../res/boss.png")}
                style={styles.profile}
            ></Image>
            <Text style={styles.name}>Mohssine Elattari</Text>
        </ImageBackground>
        <View style={styles.container}>
            <DrawerItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF",
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    }
});