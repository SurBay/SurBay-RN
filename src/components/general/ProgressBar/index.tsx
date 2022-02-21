import { WIDTH } from '@constants/screenSize'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'

type propsT = {
    progress: number,
    width: number,
    height: number,
    background_color: string,
    gauge_color: string,
}

export function ProgressBar(props: propsT) {
    const [progress, setProgress] = useState(props.progress)
    const height = props.height
    const width = props.width
    
    useEffect(() => {
        setProgress(props.progress)
    }, [props.progress])

    return (
        <View style={{...styles.container, width: width, height: height}}>
            <View style={{...styles.bar_background, width: width, height: height - 1.5, backgroundColor: props.background_color,}}>
                <View style={{...styles.bar_foreground, width: width * progress, height: height, backgroundColor: props.gauge_color}} />
            </View>
        </View>
    )
}