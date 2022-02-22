import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SecondPage from '@screens/main/SecondPage'
import { ResearchDetailPage } from '@screens/detail/ResearchDetailPage'
import { Text, View } from 'react-native'

export const SecondNavigator = createStackNavigator<SecondNavigatorProps>()
export type SecondNavigatorProps = {
    second: any
    researchDetail: any
}

export default function SecondNavigation() {
    return (
        <SecondNavigator.Navigator>
            <SecondNavigator.Screen name='second' component={SecondPage} options={{headerShown: false}} />
            <SecondNavigator.Screen name='researchDetail' component={ResearchDetailPage} options={{
                
            }} />
        </SecondNavigator.Navigator>
    )
}