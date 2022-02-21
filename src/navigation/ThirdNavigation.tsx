import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ThirdPage from '@screens/main/ThirdPage'

export const ThirdNavigator = createStackNavigator<ThirdNavigatorProps>()
export type ThirdNavigatorProps = {
    third: any
}

export default function ThirdNavigation() {
    return (
        <ThirdNavigator.Navigator>
            <ThirdNavigator.Screen name='third' component={ThirdPage} options={{headerShown: false}} />
        </ThirdNavigator.Navigator>
    )
}