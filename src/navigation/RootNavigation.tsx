import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from '@screens/auth/loginPage'
import HomePage from '@screens/main/HomePage'
import SplashPage from '@screens/auth/SplashPage'
import MainNavigation, { MainNavigatorProps } from './MainNavigation'
import { SafeAreaView } from 'react-native'
import SubNavigation, { SubNavigatorProps } from './SubNavigation'

export const RootNavigator = createStackNavigator<RootNavigatorProps>()
export type RootNavigatorProps = {
    splash: any,
    login: any,
    main: MainNavigatorProps,
    subNav: {
        screen: 'researchDetail'
    },
}   

export default function RootNavigation() {
    return (
        <RootNavigator.Navigator initialRouteName='splash' screenOptions={{
            headerShown: false,
        }}>
            <RootNavigator.Screen name='splash' component={SplashPage} />
            <RootNavigator.Screen name='login' component={LoginPage} />
            <RootNavigator.Screen name='main' component={MainNavigation} options={{gestureEnabled: false}}/>
            <RootNavigator.Screen name='subNav' component={SubNavigation} />
        </RootNavigator.Navigator>

    )
}