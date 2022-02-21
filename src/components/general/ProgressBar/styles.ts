import { WIDTH } from "@constants/screenSize"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: WIDTH - 40,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar_background: {
        width: WIDTH - 40,
        height: 10.5,
        justifyContent: 'center',
        borderRadius: 100,
    },
    bar_foreground: {
        width: 0,
        height: 12,
        borderRadius: 100,
    },
})