import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import { View } from 'react-native';

const MainLayout = ({ children }) => {
    return (
        <ImageBackground style={styles.image} source={require('../../assets/background.jpg')}>
            <View style={styles.container}>
                {children}
            </View>
        </ImageBackground>
    );
};

export default MainLayout;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 30,
        margin: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        width: "auto",
        height: "auto",
    },

});