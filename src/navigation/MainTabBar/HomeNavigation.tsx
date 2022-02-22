import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomePage from '@screens/main/HomePage'

export const HomeNavigator = createStackNavigator<HomeNavigatorProps>()
export type HomeNavigatorProps = {
    home: any
}

export default function HomeNavigation() {
    return (
        <HomeNavigator.Navigator>
            <HomeNavigator.Screen name='home' component={HomePage} options={{headerShown: false}} />
        </HomeNavigator.Navigator>
    )
}