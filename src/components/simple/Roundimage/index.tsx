import React from 'react'
import { Image, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

export function RoundImage() {
    return (
        <View>
            <TouchableOpacity style={{borderRadius: 5000}} activeOpacity={0.7} onPress={() => console.log("clicked")}>
                <Image source={require("@res/test.png")} style={{borderRadius: 20, width: 80, height: 80}} />
            </TouchableOpacity>
        </View>
    )
}