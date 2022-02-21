import { HEIGHT, WIDTH } from "@constants/screenSize"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    centeredView: {
        width: WIDTH,
        height: HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        width: WIDTH * (3/4),
        height: HEIGHT * (1/10),
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
    }
})