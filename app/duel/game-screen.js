import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MainLayout from '../layouts/main-layout';
import { useLocalSearchParams } from 'expo-router';

const GameScreen = () => {

    const { playerOne, playerTwo} = useLocalSearchParams();

    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(playerOne);
    const [isDraw, setIsDraw] = useState(false);
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleSquarePress = (index) => {
        if (board[index] || winner) return;

        if(!isXNext) {
            setCurrentPlayer(playerOne);
        }
        else {
            setCurrentPlayer(playerTwo);
        };

        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);

        setIsXNext(!isXNext);
        checkWinner(newBoard);
    };

    const checkWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                const winnerName = board[a] === "X" ? playerOne : playerTwo;

                setWinner(winnerName);
                return;
            };
        };

        if (!board.includes(null)) {
            setIsDraw(true);
            setWinner("No One");
        };
    };

    const renderSquare = (index) => {
        return (
            <TouchableOpacity
                style={styles.square}
                onPress={() => handleSquarePress(index)}
            >
                <Text style={styles.squareText}>{board[index]}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <MainLayout>
            {!winner &&( 
                <View style={styles.board}>
                    <Text style={styles.turnText}> {currentPlayer.toUpperCase()}'s Turn!</Text>
                    <Text style={styles.currentTurnText} >{isXNext ? "X" : "O"}</Text>
                </View>
            )}
            {winner && <Text style={styles.winnerText}>{winner} wins!</Text>}
            <View style={styles.board}>
                <View style={styles.row}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </View>
                <View style={styles.row}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </View>
                <View style={styles.row}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </View>
            </View>
        </MainLayout>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    board: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    row: {
        flexDirection: "row",
    },
    square: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
    },
    squareText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    winnerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        color: "white",
    },
    turnText: {
        fontSize: 30,
        color: "white",
        marginBottom: 50

    },
    currentTurnText: {
        fontSize: 40,
        color: "white"
    }
});