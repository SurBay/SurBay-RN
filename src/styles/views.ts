import { HEIGHT, WIDTH } from "@constants/screenSize"
import { StatusBar, StyleSheet } from "react-native"

export const views = StyleSheet.create({
    safeAreaView: {
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
    },
})