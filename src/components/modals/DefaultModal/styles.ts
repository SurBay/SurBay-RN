import { HEIGHT, WIDTH } from "@constants/screenSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        width: WIDTH,
        height: HEIGHT,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#00000077",
    },
    modalView: {
        marginHorizontal: WIDTH / 8,
        height: HEIGHT / 10,
        backgroundColor: "yellow",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
    }
})