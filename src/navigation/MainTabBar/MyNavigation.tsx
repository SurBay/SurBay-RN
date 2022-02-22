import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyPage from '@screens/main/MyPage'

export const MyNavigator = createStackNavigator<MyNavigatorProps>()
export type MyNavigatorProps = {
    my: any
}

export default function MyNavigation() {
    return (
        <MyNavigator.Navigator>
            <MyNavigator.Screen name='my' component={MyPage} options={{headerShown: false}} />
        </MyNavigator.Navigator>
    )
}