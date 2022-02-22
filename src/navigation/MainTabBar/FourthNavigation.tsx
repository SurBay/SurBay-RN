import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FourthPage from '@screens/main/FourthPage'

export const FourthNavigator = createStackNavigator<FourthNavigatorProps>()
export type FourthNavigatorProps = {
    fourth: any
}

export default function FourthNavigation() {
    return (
        <FourthNavigator.Navigator>
            <FourthNavigator.Screen name='fourth' component={FourthPage} options={{headerShown: false}} />
        </FourthNavigator.Navigator>
    )
}