import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BackHandler, Modal, View } from 'react-native'

import { HomeNavigatorProps } from '@navigation/HomeNavigation'
import { SecondNavigatorProps } from '@navigation/SecondNavigation'
import { ThirdNavigatorProps } from '@navigation/ThirdNavigation'
import { FourthNavigatorProps } from '@navigation/FourthNavigation'
import { MyNavigatorProps } from '@navigation/MyNavigation'

import HomeNavigation from '@navigation/HomeNavigation'
import SecondNavigation from '@navigation/SecondNavigation'
import ThirdNavigation from '@navigation/ThirdNavigation'
import FourthNavigation from '@navigation/FourthNavigation'
import MyNavigation from '@navigation/MyNavigation'

export const MainNavigator = createBottomTabNavigator<MainNavigatorProps>()
export type MainNavigatorProps = {
    homeNav: HomeNavigatorProps
    secondNav: SecondNavigatorProps
    thirdNav: ThirdNavigatorProps
    fourthNav: FourthNavigatorProps
    myNav: MyNavigatorProps
}

export default function MainNavigation( { navigation }: any) {
    // BackHandler.addEventListener('hardwareBackPress', () => {
    //     console.log("안돼요");
    //     return true
    // })

    return (
        <MainNavigator.Navigator initialRouteName='homeNav'>
            <MainNavigator.Screen name='homeNav' component={HomeNavigation} options={{
                headerTitle: "리서치",
                headerTitleAlign: 'center',
                headerStyle: {
                    shadowOpacity: 30,
                }
            }} />
            <MainNavigator.Screen name='secondNav' component={SecondNavigation} options={{
                
            }} />
            <MainNavigator.Screen name='thirdNav' component={ThirdNavigation} options={{

            }} />
            <MainNavigator.Screen name='fourthNav' component={FourthNavigation} options={{

            }} />
            <MainNavigator.Screen name='myNav' component={MyNavigation} options={{

            }} />
        </MainNavigator.Navigator>
    )
}