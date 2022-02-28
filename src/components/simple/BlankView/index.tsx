import { HEIGHT, WIDTH } from '@constants/screenSize'
import { colors } from '@styles/colors'
import React from 'react'
import { View } from 'react-native'

export const BlankView = ({width = WIDTH, height = HEIGHT, marginHorizontal = 0, marginVertical = 0, backgroundColor=colors.background} 
    : {width?: number, height?: number, marginHorizontal?: number, marginVertical?: number, backgroundColor?: string}) => {
    return (
        <View style={{width, height, marginHorizontal, marginVertical, backgroundColor}}  />
    )
}