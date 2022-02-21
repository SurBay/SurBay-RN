import { RoundImage } from '@components/simple/Roundimage'
import { SecondNavigatorProps } from '@navigation/SecondNavigation'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles'

export function ResearchItem () {

    const navigation = useNavigation<StackNavigationProp<SecondNavigatorProps>>()
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.main_view} onPress={() => navigation.navigate('researchDetail')} activeOpacity = {1}>
                <View style={styles.left_view}>
                    <RoundImage />
                </View>
                <View style={styles.middle_view}>
                    <Text>첫줄</Text>
                    <Text>둘째줄</Text>
                    <Text>셋째줄</Text>
                </View>
                <View style={styles.right_view}>
                </View>
            </TouchableOpacity>
        </View>
    )
}