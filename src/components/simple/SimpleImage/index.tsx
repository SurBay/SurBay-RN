import React from 'react'
import { Image, Text, View, TouchableOpacity, BackHandler } from 'react-native'
type props= {
    width?: number
    height?: number
    opacity?: number
    radius?: number
    onPress?: () => void
    source: string,
}


export function SimpleImage({source = "https://surbaystore.s3.ap-northeast-2.amazonaws.com/5901633188992739.jfif", width = 24, height = 24, opacity = 1, radius = 0, onPress = () => {console.log("왜?")}}: props) {
    
    return (
        <View>
            <TouchableOpacity style={{borderRadius: radius}} activeOpacity={opacity} onPress={onPress}>
                <Image source={{uri: source}} style={{borderRadius: radius, width: width, height: height}} />
            </TouchableOpacity>
        </View>
    )
}
