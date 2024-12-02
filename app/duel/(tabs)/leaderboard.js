import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/main-layout";
import { getWinners, deleteWinners } from "../../../api/api";

const Leaderboard = () => {

    const [winnerList, setWinnerList] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);

    const fetchData = async () => {
        try {
            const response = await getWinners();

            setWinnerList(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (winnerList.length > 0) {
            const tallyWins = winnerList.reduce((acc, winner) => {
                const { name } = winner;
                if (acc[name]) {
                    acc[name] += 1;
                } else {
                    acc[name] = 1;
                }
                return acc;
            }, {});

            const leaderboardData = Object.keys(tallyWins).map(name => ({
                name,
                wins: tallyWins[name]
            }))
                .sort((a, b) => b.wins - a.wins);

            setLeaderboard(leaderboardData);
        }
    }, [winnerList]);


    const handleDeleteAllWinners = async () => {
        try {
            const deletePromises = winnerList.map((winner) => {
                return deleteWinners(winner.id);
            });
    
            await Promise.all(deletePromises);
    
            console.log("All leaderboard data has been deleted!");
    

            setWinnerList([]); 
            setLeaderboard([]);
        } catch (error) {
            console.error("Error deleting leaderboard data: ", error);
            Alert.alert("Error", "There was an issue deleting the leaderboard data.");
        }
    };
    

    return (
        <MainLayout>
            <View style={styles.headerContainer}>
                <Text style={styles.textStyle}>Leaderboard</Text>
            </View>

            <View style={styles.leaderboardContainer}>
                {
                    leaderboard.map((winner, index) => (
                        <Text style={styles.winnerStyles} key={index}>{index + 1}. {winner.name} - Wins: {winner.wins}</Text>
                    ))
                }
            </View>

            {/* Button positioned at the bottom */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.container} onPress={handleDeleteAllWinners} >
                    <Text style={styles.button}>Delete Leaderboard Data</Text>
                </TouchableOpacity>
            </View>
        </MainLayout>
    );
};

export default Leaderboard;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        color: "white",
        fontSize: 46,
        textAlign: "center",
    },
    leaderboardContainer: {
        marginTop: 20,
        flex: 1,
        justifyContent: "flex-start",
    },
    winnerStyles: {
        color: "white",
        fontSize: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        flex: 0,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
    },
    container: {
        marginBottom: 100,
        marginTop: 100,
    },
    button: {
        color: "white",
        fontSize: 20,
        backgroundColor: "crimson",
        padding: 25,
        paddingRight: 40,
        paddingLeft: 40,
        borderRadius: 40,
    },
});