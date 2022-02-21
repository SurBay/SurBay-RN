import { HEIGHT, WIDTH } from '@constants/screenSize'
import React from 'react'
import { StyleSheet } from 'react-native'

const container_height = 120

export const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: container_height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    main_view: {
        width: WIDTH,
        height: container_height,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    left_view: {
        width: container_height - 30,
        height: container_height - 10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    middle_view: {
        flex: 1,
        height: container_height - 10,
        backgroundColor: 'cyan',
    },
    right_view: {
        width: 50,
        height: container_height - 10,
        backgroundColor: 'purple',
        marginRight: 10,
    }
})