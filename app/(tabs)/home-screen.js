import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MainLayout from '../layouts/main-layout';
import { useRouter } from 'expo-router';

const HomeScreen = () => {

    const router = useRouter();

    return (
        <MainLayout>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Welcome To Ultimate T-T-T Duel!</Text>
            </View>
            <TouchableOpacity style={styles.container} onPress={() => router.push("../duel/create-match")}>
                <Text style={styles.button}>PLAY</Text>
            </TouchableOpacity>
        </MainLayout>
    );
};

export default HomeScreen;

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