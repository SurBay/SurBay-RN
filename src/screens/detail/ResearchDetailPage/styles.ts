import { WIDTH } from "@constants/screenSize"
import { colors } from "@styles/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    introduction_container: {
        
    },
    bottom_button_container: {
        flexDirection: "row",
        width: WIDTH,
        height: 85,
    },
    bottom_button_view_sub: {
        flex: 1,
        backgroundColor: "#555555",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_button_view_main: {
        flex: 2,
        backgroundColor: colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_button_text: {
        color: "white",
        marginBottom: 16,
    },
})