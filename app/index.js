import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import MainLayout from './layouts/main-layout';
import { Button } from 'react-native-web';

const Index = () => {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Ultimate T-T-T Duel</Text>
            </View>
            <TouchableOpacity style={styles.container} onPress={() => Alert.alert("WOAH", "OOPSIE")}>
                <Text style={styles.button}>START</Text>
            </TouchableOpacity>
        </MainLayout>
    );
};

export default Index;

const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        fontSize: 40,
        textAlign: "center",

    },

    container: {
        marginBottom: 100,
        marginTop: 100,
    },

    button: {
        color: "white",
        fontSize: 25,
        backgroundColor: "dodgerblue",
        padding: 25,
        paddingRight: 80,
        paddingLeft: 80,
        borderRadius: 40
    },
});