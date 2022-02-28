import { HeaderIcon } from '@components/general/HeaderIcon'
import { ProgressBar } from '@components/general/ProgressBar'
import { BlankView } from '@components/simple/BlankView'
import { HEIGHT, WIDTH } from '@constants/screenSize'
import { colors } from '@styles/colors'
import { theme } from '@styles/theme'
import React, { useContext, useEffect } from 'react'
import { BackHandler, Text, View, StatusBar, TouchableOpacity, ScrollView, Image, ListView, FlatList } from 'react-native'
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
                        <View style={{backgroundColor: "white", marginHorizontal: 20, marginVertical: 15, flexDirection: 'row', shadowOpacity: 0.3, shadowOffset: {width: 2, height: 2,}, elevation: 2,}}>
                            <Image style={{width: 64, height: 64, borderRadius: 100, }} source={require("@res/images/temporary/company.png")} />
                            <View style={{marginLeft: 12,}}>
                                <View style={{flexDirection: "row"}}>
                                    <Text>기업</Text>
                                    <Text> #디자인 #기획</Text>
                                </View>
                                <Text>디자인 기획 관련</Text>
                                <Text>by 작성자명</Text>

                            </View>
                        </View>
                        <View>
                            <View style={{marginHorizontal: 20, paddingVertical: 20, borderRadius: 5, borderWidth: 2, borderColor: "#F5F5F5",}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                                    <Text>기간</Text>
                                    <BlankView width={1} height={5} backgroundColor={theme.line.theme} marginHorizontal={5}/>
                                    <Text numberOfLines={1} style={{flex: 1, flexWrap: 'wrap'}}>22.02.19 12 : 00 ~ 22.02.19 12 : 00</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 20,}}>
                                    <Text>조건</Text>
                                    <BlankView width={1} height={5} backgroundColor={theme.line.theme} marginHorizontal={5}/>
                                    <Text numberOfLines={1} style={{flex: 1, flexWrap: 'wrap'}}>쇼핑몰을 이용 해 본 적 있는 20대 여성</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', marginBottom: 40,}}>
                            <View style={{width: WIDTH - 50, flexDirection: 'row', justifyContent: "space-between", marginBottom: 12,}}>
                                <Text>달성률</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text>37/50</Text>
                                    <Text>   60 %</Text>
                                </View>
                            </View>
                            <ProgressBar progress={0.6} background_color={theme.gauge_background.light_gray} gauge_color={theme.gauge_foreground.theme} width={WIDTH - 50} height={12} />
                        </View>
                    </View>
                    <BlankView height={4}/>
                    <View style={{marginVertical: 20, marginHorizontal: 20,}}>
                        <Text>내용</Text>
                        <Text>
                        React Native – one framework to rule them all
React Native has been successfully adopted by hundreds of businesses worldwide, including Uber, Microsoft, and Facebook, and is used across a whole range of industries.

However, before you decide to go all-in with React Native, it’s crucial that you understand how it works, and decide if it’s the best fit for your project.

What are its top advantages and biggest drawbacks? How is it different from other cross-development platforms?nAnd last but not least – what do your developers need to be aware of before they embark on the React Native journey?

In the following article, we’ll answer these and other questions – all so you can make an educated choice and see if React Native is ideal for your business.
React Native – one framework to rule them all
React Native has been successfully adopted by hundreds of businesses worldwide, including Uber, Microsoft, and Facebook, and is used across a whole range of industries.

However, before you decide to go all-in with React Native, it’s crucial that you understand how it works, and decide if it’s the best fit for your project.

What are its top advantages and biggest drawbacks? How is it different from other cross-development platforms?nAnd last but not least – what do your developers need to be aware of before they embark on the React Native journey?

In the following article, we’ll answer these and other questions – all so you can make an educated choice and see if React Native is ideal for your business.
                        </Text>
                    </View>
                    <BlankView height={4}/>
                    <View>
                        <Text>증정품</Text>
                        <FlatList
                        horizontal={true}
                        style={{marginTop: 25, marginBottom: 40,}}
                        keyExtractor={(item) => {return item.title}}
                        showsHorizontalScrollIndicator={false}
                        data={[{title: "hi", text: "1명", image: "https://surbaycoupon.s3.ap-northeast-2.amazonaws.com/281634673608853.jpeg", }, {title: "hi2", text: "전원", image: "https://surbaycoupon.s3.ap-northeast-2.amazonaws.com/7281634673660816.jpeg"}, {title: "hi3", text: "1명", image: "https://surbaycoupon.s3.ap-northeast-2.amazonaws.com/9961634673796708.jpeg"}, {title: "h4", text: "1명", image: "https://surbaycoupon.s3.ap-northeast-2.amazonaws.com/281634673608853.jpeg", }, {title: "hi5", text: "전원", image: "https://surbaycoupon.s3.ap-northeast-2.amazonaws.com/7281634673660816.jpeg"}, {title: "hi6", text: "1명", image: "https://surbaycoupon.s3.ap-northeast-2.amazonaws.com/9961634673796708.jpeg"}]}
                        renderItem={(item) => {
                            return (
                                <View style={{width: 160, alignItems: 'center'}}>
                                    <Image style={{width: 140, height: 96,}} source={{uri: item.item.image}} />
                                    <Text>{item.item.title}</Text>
                                    <Text>{item.item.text}</Text>
                                </View>
                            )
                        }}>

                        </FlatList>
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