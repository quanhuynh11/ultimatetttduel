import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='create-match' options={{ title: "Create a Match" }} />
            <Stack.Screen name='(tabs)' options={{ title: "Tabs" }} />
        </Stack>
    );
};

export default _layout;