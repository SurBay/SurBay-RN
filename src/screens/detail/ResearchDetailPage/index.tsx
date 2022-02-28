import { HeaderIcon } from '@components/general/HeaderIcon'
import { ProgressBar } from '@components/general/ProgressBar'
import { BlankView } from '@components/simple/BlankView'
import { HEIGHT, WIDTH } from '@constants/screenSize'
import { colors } from '@styles/colors'
import { theme } from '@styles/theme'
import React, { useContext, useEffect } from 'react'
import { BackHandler, Text, View, StatusBar, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import { BottomButtonContainer, BottomButtonText, BottomButtonViewMain, BottomButtonViewSub, Container, ContentsContainer, ContentsText, ContentsTitle, GiftContainer, GiftTitle, InformationContainer, InformationMainContainer, InformationRateContainer, InformationRateTitle, InformationRateView, InformationSubContainer } from './styles'
import styled from 'styled-components/native'

export function ResearchDetailPage({ navigation, route }: any) {


    const contents_text = "안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n안녕하세요. 저희는 한국외대 글로벌캠퍼스 공식 커뮤니티 ‘HUFSTORY’ 입니다 :) 신규 강의평가 서비스 ‘HUBIGO’에 대한 설문조사에 참여하시면 참가 인원 전원 아메리카노 증정 + 추첨을 통해 에어팟(1인)을 드립니다! 많은 참여 부탁드립니다 :)\n"

    BackHandler.addEventListener("hardwareBackPress", () => {
        navigation.pop()
        return true
    })
    return (
        <Container>
            <View style={{flex: 1}}>
                <ScrollView style={{backgroundColor: 'white'}}>
                    <BlankView height={1}/>
                    <InformationContainer>
                        <InformationMainContainer>
                            <Image style={{width: 64, height: 64, borderRadius: 100, }} source={require("@res/images/temporary/company.png")} />
                            <View style={{marginLeft: 12,}}>
                                <View style={{flexDirection: "row"}}>
                                    <Text>기업</Text>
                                    <Text> #디자인 #기획</Text>
                                </View>
                                <Text>디자인 기획 관련</Text>
                                <Text>by 작성자명</Text>
                            </View>
                        </InformationMainContainer>
                        
                        <InformationSubContainer>
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
                        </InformationSubContainer>

                        <InformationRateContainer>
                            <InformationRateView>
                                <InformationRateTitle>달성률</InformationRateTitle>
                                <View style={{flexDirection: 'row'}}>
                                    <Text>37</Text>
                                    <Text> / </Text>
                                    <Text>50</Text>
                                    <Text>   60 %</Text>
                                </View>
                            </InformationRateView>
                            <ProgressBar progress={0.6} background_color={theme.gauge_background.light_gray} gauge_color={theme.gauge_foreground.theme} width={WIDTH - 50} height={12} />
                        </InformationRateContainer>

                    </InformationContainer>


                    <BlankView height={4}/>
                    <ContentsContainer>
                        <ContentsTitle>내용</ContentsTitle>
                        <ContentsText>
                            {contents_text}
                        </ContentsText>
                    </ContentsContainer>


                    <BlankView height={4}/>
                    <GiftContainer>
                        <GiftTitle>증정품</GiftTitle>
                        <FlatList
                        horizontal={true}
                        style={{marginTop: 20, marginBottom: 20,}}
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
                    </GiftContainer>
                </ScrollView>
            </View>
            

            <BottomButtonContainer>
                <BottomButtonViewSub activeOpacity={0.8}>
                    <BottomButtonText>마감하기</BottomButtonText>
                </BottomButtonViewSub>
                <BottomButtonViewMain activeOpacity={0.8}>
                    <BottomButtonText>연장하기</BottomButtonText>
                </BottomButtonViewMain>
            </BottomButtonContainer>
            
        </Container>
    )
    
}