import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ResearchDetailPage } from '@screens/detail/ResearchDetailPage'
import { HeaderIcon } from '@components/general/HeaderIcon'
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu'

export const SubNavigator = createStackNavigator<SubNavigatorProps>()
export type SubNavigatorProps = {
    "researchDetail": any
}

export default function SubNavigation() {
    return (
        <SubNavigator.Navigator screenOptions={({ navigation }) => {
            return (
                {
                    headerTitle: "",
                    headerLeft: () => {
                        return (
                            <View style={{flexDirection: "row"}}>
                                <HeaderIcon role="back" onPress={() => navigation.pop()} />
                            </View>
                        )
                    }
                }
            )
        }}>
            <SubNavigator.Screen name="researchDetail" component={ResearchDetailPage} options={{
                headerRight: () => {
                    return (
                        <View style={{flexDirection: "row"}}>
                            <HeaderIcon role='upload' onPress={() => {console.log("업로드 하기")}} marginRight={15} />
                            <Menu name='research-detail-more-vertical-menu'>
                                <MenuTrigger>
                                    <HeaderIcon role='more_vertical' onPress={() => {}} marginLeft={0} />
                                </MenuTrigger>
                                <MenuOptions customStyles={{
                                    optionsContainer: {
                                        width: 180,
                                        backgroundColor: "#F5F5F5",
                                        borderRadius: 8,
                                        marginLeft: -15,
                                        marginTop: 36,
                                        paddingVertical: 10,
                                        alignItems: 'center',
                                    }
                                }}>
                                    <MenuOption>
                                        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', paddingVertical: 3,}} onPress={() => {console.log("쪽지 보내기")}}>
                                            <Image style={{width: 16, height: 16, marginRight: 10,}} source={require("@res/images/icons/send.png")} />
                                            <Text>작성자에게 쪽지 보내기</Text>
                                        </TouchableOpacity>
                                    </MenuOption>
                                    <MenuOption>
                                        <TouchableOpacity style={{flexDirection: "row", alignItems: 'center', paddingVertical: 3,}} onPress={() => {console.log("신고하기")}}>
                                            <Image style={{width: 16, height: 16, marginRight: 10,}} source={require("@res/images/icons/left.png")} />
                                            <Text>신고하기</Text>
                                        </TouchableOpacity>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                    )
                }
            }} />
        </SubNavigator.Navigator>
    )
}