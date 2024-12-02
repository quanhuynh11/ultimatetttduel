import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MainLayout from '../layouts/main-layout';
import { useRouter } from 'expo-router';

const CreateMatch = () => {

    const [playerOneName, setPlayerOneName] = useState(null);
    const [playerTwoName, setPlayerTwoName] = useState(null);
    const [turnTime, setTurnTime] = useState(30);

    const router = useRouter();

    const handleStartGame = () => {
        if (playerOneName && playerTwoName) {
            router.push(({
                pathname: '/duel/game-screen',
                params: {
                    playerOne: playerOneName,
                    playerTwo: playerTwoName,
                    turnTime: turnTime,
                },
            }));
        }
        else {
            Alert.alert("Empty Fields", "Player names cannot be empty!")
        }
    };

    return (
        <MainLayout>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelStyle}>Player 1 : </Text>
                    <TextInput value={playerOneName} onChangeText={setPlayerOneName} style={styles.inputStyle} placeholder='Name' />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelStyle}>Player 2 :</Text>
                    <TextInput value={playerTwoName} onChangeText={setPlayerTwoName} style={styles.inputStyle} placeholder='Name' />
                </View>
                {/* <View style={styles.inputContainer}>
                    <Text style={styles.labelStyle}>Turn Time:</Text>
                    <TextInput inputMode="numeric" value={turnTime} onChangeText={setTurnTime} style={styles.inputStyle} placeholder='(Default 30s)' />
                </View> */}

                <TouchableOpacity style={styles.container} onPress={handleStartGame}>
                    <Text style={styles.button}>START</Text>
                </TouchableOpacity>

            </View>
        </MainLayout>
    );
};

export default CreateMatch;

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: "white",
        padding: 20,
        paddingLeft: 5,
        width: 225,
        fontSize: 15,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20
    },

    labelStyle: {
        fontSize: 15,
        backgroundColor: "white",
        padding: 20,
        paddingRight: 0,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
    },

    container: {
        marginTop: 200,
    },

    button: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        backgroundColor: "dodgerblue",
        padding: 25,
        paddingRight: 80,
        paddingLeft: 80,
        borderRadius: 40
    },
});