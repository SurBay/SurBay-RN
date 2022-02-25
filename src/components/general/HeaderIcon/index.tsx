import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function HeaderIcon({ role, onPress, marginLeft = 15, marginRight = 15 }: {role: string,  onPress: () => void, marginLeft?: number, marginRight?: number}) {

    if (role === "back") {
        return (
            <TouchableOpacity onPress={onPress}>
                <Image source={require("@res/images/icons/left.png")} style={{...styles.back, marginLeft: marginLeft, marginRight: marginRight}} />
            </TouchableOpacity>
            )
    } else if (role === "upload") {
        return (
            <TouchableOpacity onPress={onPress}>
                <Image source={require("@res/images/icons/upload.png")} style={{...styles.upload, marginLeft: marginLeft, marginRight: marginRight}} />
            </TouchableOpacity>
            )
    } else if (role === "more_vertical") {
        return (
                <Image source={require("@res/images/icons/more_vertical.png")} style={{...styles.more_vertical, marginLeft: marginLeft, marginRight: marginRight}} />
            )
    } else {
        return (
            <TouchableOpacity>
                <Text>에러</Text>
            </TouchableOpacity>
        )
    }

}