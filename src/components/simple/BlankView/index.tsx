import { HEIGHT, WIDTH } from '@constants/screenSize'
import { colors } from '@styles/colors'
import React from 'react'
import { View } from 'react-native'

export const BlankView = ({width = WIDTH, height = HEIGHT, backgroundColor=colors.background} : {width?: number, height?: number, backgroundColor?: string}) => {
    return (
        <View style={{width, height, backgroundColor}}  />
    )
}