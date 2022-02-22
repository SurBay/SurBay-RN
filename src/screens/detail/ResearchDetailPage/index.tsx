import React, { useContext, useEffect } from 'react'
import { BackHandler, Text, View } from 'react-native'

export function ResearchDetailPage( {navigation, route}: any ) {

    BackHandler.addEventListener("hardwareBackPress", () => {
        navigation.pop()
        return true
    })

    return (
        <View>
            <Text>ResearchDetail</Text>
        </View>
    )
}