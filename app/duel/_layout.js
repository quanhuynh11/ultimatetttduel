import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{ title: "Home", headerShown: false, animation: "slide_from_left" }} />
            <Stack.Screen name='create-match' options={{
                title: "Create a Match",
                headerStyle: {
                    backgroundColor: "rgb(36, 36, 36)",
                },
                headerTintColor: "dodgerblue",
                headerTitleStyle: { color: "white" },
                headerTransparent: true,
                animation: "slide_from_right"
            }}
            />

            <Stack.Screen name='game-screen' options={{ title: "Game", headerShown: false }} />
        </Stack>
    );
};

export default _layout;