import React, { useState } from 'react'
import { Modal, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { styles } from './styles'
export function ExitAppModal() {
    const [modalVisible, setModalVisible] = useState(false)
    BackHandler.addEventListener("hardwareBackPress", () => {
        setModalVisible(prev => !prev)
        return true
    })
    return (
        <View>
            <Modal
                animationType='fade'
                visible={modalVisible}
                transparent={true}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>앱을 종료하시겠습니까?</Text>
                        </View>
                    </View>
            </Modal>
        </View>
    )
}