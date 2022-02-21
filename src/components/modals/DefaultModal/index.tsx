import React from 'react'
import { Modal, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function DefaultModal() {
    return (
        <View style={{backgroundColor: 'black'}}>
            <Modal
            animationType='slide'
            visible={true}
            transparent={true}>
                <TouchableOpacity style={styles.centeredView} onPress={() => console.log("finish")} activeOpacity={0.9}>
                    <TouchableOpacity style={styles.modalView} onPress={() => console.log("HI")}>
                        <Text>앱을 나가시겠습니까?</Text>
                        <Text></Text>
                        <View style={{flexDirection: "row"}}>
                            <Text>어</Text>
                            <Text>ㄴㄴ</Text>
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
        
    )
}