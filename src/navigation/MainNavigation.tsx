import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BackHandler, Modal, View } from 'react-native'

import { HomeNavigatorProps } from '@navigation/MainTabBar/HomeNavigation'
import { SecondNavigatorProps } from '@navigation/MainTabBar/SecondNavigation'
import { ThirdNavigatorProps } from '@navigation/MainTabBar/ThirdNavigation'
import { FourthNavigatorProps } from '@navigation/MainTabBar/FourthNavigation'
import { MyNavigatorProps } from '@navigation/MainTabBar/MyNavigation'

import HomeNavigation from '@navigation/MainTabBar/HomeNavigation'
import SecondNavigation from '@navigation/MainTabBar/SecondNavigation'
import ThirdNavigation from '@navigation/MainTabBar/ThirdNavigation'
import FourthNavigation from '@navigation/MainTabBar/FourthNavigation'
import MyNavigation from '@navigation/MainTabBar/MyNavigation'
import { HeaderIcon } from '@components/general/HeaderIcon'

export const MainNavigator = createBottomTabNavigator<MainNavigatorProps>()


export type MainNavigatorProps = {
    homeNav: HomeNavigatorProps
    secondNav: SecondNavigatorProps
    thirdNav: ThirdNavigatorProps
    fourthNav: FourthNavigatorProps
    myNav: MyNavigatorProps
}

export default function MainNavigation( { navigation, route }: any) {

    return (
        <MainNavigator.Navigator initialRouteName='homeNav' screenOptions={{
        }}>
            <MainNavigator.Screen name='homeNav' component={HomeNavigation} options={{
                headerTitle: "리서치",
                headerTitleAlign: 'center',
                headerStyle: {
                    shadowOpacity: 30,
                }
            }} />
            <MainNavigator.Screen name='secondNav' component={SecondNavigation} options= {({ navigation }) => {
                return (
                    {
                        headerTitle: "리서치",
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <View style={{flexDirection: "row"}}>
                                <HeaderIcon role="back" onPress={() => {navigation.pop()}} />
                            </View>
                            
                        )
                    }
                )
                
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