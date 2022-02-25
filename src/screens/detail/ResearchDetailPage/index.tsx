import { HeaderIcon } from '@components/general/HeaderIcon'
import { ProgressBar } from '@components/general/ProgressBar'
import { BlankView } from '@components/simple/BlankView'
import { HEIGHT, WIDTH } from '@constants/screenSize'
import { colors } from '@styles/colors'
import { theme } from '@styles/theme'
import React, { useContext, useEffect } from 'react'
import { BackHandler, Text, View, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from './styles'

export function ResearchDetailPage({ navigation, route }: any) {
    
    BackHandler.addEventListener("hardwareBackPress", () => {
        navigation.pop()
        return true
    })

    return (
        <View style={{flexGrow: 1, justifyContent: 'space-between', backgroundColor: "gray"}} >
            <View style={{flex: 1}}>
                <ScrollView style={{backgroundColor: 'white'}}>
                    <BlankView height={1}/>
                    <View>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                    </View>
                    <BlankView height={4}/>
                    <View>
                        <Text>안녕</Text>
                        <ProgressBar progress={0.1} background_color={theme.gauge_background.light_gray} gauge_color={theme.gauge_foreground.theme} width={WIDTH - 80} height={12} />
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                    </View>
                    <BlankView height={4}/>
                    <View>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                        <Text>안녕</Text>
                    </View>
                </ScrollView>
            </View>
            

            <View style={styles.bottom_button_container}>
                <TouchableOpacity style={{...styles.bottom_button_view_sub}} activeOpacity={0.8}>
                    <Text style={styles.bottom_button_text}>마감하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.bottom_button_view_main}} activeOpacity={0.8}>
                    <Text style={styles.bottom_button_text}>연장하기</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}