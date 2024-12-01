import React from 'react';
import { Tabs } from 'expo-router';

import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='home-screen'
                options={{
                    title: "Home", headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarStyle: { backgroundColor: "rgb(36, 36, 36)", height: 65, borderTopWidth: 0, position: "absolute", }
                }} />

            <Tabs.Screen name='leaderboard'
                options={{
                    title: "Leaderboard", headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="leaderboard" size={24} color={color} />
                    ),
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarStyle: { backgroundColor: "rgb(36, 36, 36)", height: 65, borderTopWidth: 0, position: "absolute", }
                }} />
        </Tabs>
    );
};

export default _layout;
