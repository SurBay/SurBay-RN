import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ResearchDetailPage } from '@screens/detail/ResearchDetailPage'

export const SubNavigator = createStackNavigator<SubNavigatorProps>()
export type SubNavigatorProps = {
    "researchDetail": any
}

export default function SubNavigation() {
    return (
        <SubNavigator.Navigator screenOptions={{
            headerTitle: "",
            // headerLeft: () => {
            //     return (
            //         <View>
            //             <Text>이것은 테스트입니다.</Text>
            //         </View>
            //     )
            // }
        }}>
            <SubNavigator.Screen name="researchDetail" component={ResearchDetailPage} options={{
                headerRight: () => {
                    return (
                        <View style={{flexDirection: "row"}}>
                            <TouchableOpacity onPress={() => console.log("첫 번째")}>
                                <Image source={require("@res/test.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log("두 번째")}>
                                <Image source={require("@res/test.png")} />
                            </TouchableOpacity>
                        </View>
                    )
                }
            }} />
        </SubNavigator.Navigator>
    )
}