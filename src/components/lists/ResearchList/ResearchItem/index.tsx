import { SimpleImage } from '@components/simple/SimpleImage'
import { MainNavigatorProps } from '@navigation/MainNavigation'
import { SecondNavigatorProps } from '@navigation/MainTabBar/SecondNavigation'
import { RootNavigatorProps } from '@navigation/RootNavigation'
import { SubNavigatorProps } from '@navigation/SubNavigation'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles'

export function ResearchItem () {

    const navigation = useNavigation<StackNavigationProp<RootNavigatorProps>>()
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.main_view} onPress={() => navigation.navigate('subNav', {
                screen: 'researchDetail'
            })} activeOpacity = {1}>
                <View style={styles.left_view}>
                    <SimpleImage source="https://surbaystore.s3.ap-northeast-2.amazonaws.com/1901633189033637.PNG"/>
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