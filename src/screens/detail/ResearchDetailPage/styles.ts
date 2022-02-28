import { WIDTH } from "@constants/screenSize"
import { colors } from "@styles/colors"
import { StyleSheet } from "react-native"
import styled from "styled-components/native"

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: "gray",
        justifyContent: 'space-between',
    },

    information_container: {

    },
    information_main_container: {
        flexDirection: 'row',
        backgroundColor: "white", 
        marginHorizontal: 20, 
        marginVertical: 15, 
    },
    information_sub_container: {
        marginHorizontal: 20,
        paddingVertical: 20,borderRadius: 5,
        borderWidth: 2,
        borderColor: "#F5F5F5",
    },
    information_rate_container: {
        alignItems: 'center', 
        marginBottom: 40,
    },
    information_rate_view: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: WIDTH - 50,
        marginBottom: 12,
    },
    information_rate_title: {
        fontWeight: "bold",
    },

    contents_container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    contents_title: {
        fontWeight: "bold",
    },
    contents_text: {
        marginTop: 10,
    },


    gift_container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    gift_title: {
        fontWeight: "bold",
    },


    bottom_button_container: {
        flexDirection: "row",
        width: WIDTH,
        height: 85,
    },
    bottom_button_view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_button_text: {
        color: "white",
        marginBottom: 16,
    },
})

export const Container = styled.View`
    ${styles.container} `

export const InformationContainer = styled.View`
    ${styles.information_container} `
export const InformationMainContainer = styled.View`
    ${styles.information_main_container} `
export const InformationSubContainer = styled.View`
    ${styles.information_sub_container} `
export const InformationRateContainer = styled.View`
    ${styles.information_rate_container} `
export const InformationRateView = styled.View`
    ${styles.information_rate_view} `
export const InformationRateTitle = styled.Text`
    ${styles.information_rate_title} `

export const ContentsContainer = styled.View`
    ${styles.contents_container} `
export const ContentsTitle = styled.Text`
    ${styles.contents_title} `
export const ContentsText = styled.Text`
    ${styles.contents_text} `


export const GiftContainer = styled.View`
    ${styles.gift_container} `
export const GiftTitle = styled.Text`
    ${styles.gift_title} `


export const BottomButtonContainer = styled.View`
    ${styles.bottom_button_container} `
export const BottomButtonViewMain = styled.TouchableOpacity`
    ${styles.bottom_button_view}
    backgroundColor: ${colors.themeColor};
    flex: 2; `
export const BottomButtonViewSub = styled.TouchableOpacity`
    ${styles.bottom_button_view}
    backgroundColor: ${colors.themeGray};
    flex: 1; `
export const BottomButtonText = styled.Text`
    ${styles.bottom_button_text} `