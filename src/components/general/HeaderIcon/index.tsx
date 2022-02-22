import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export function HeaderIcon({ role }: {role: string}) {

    
    if (role === "back") {
        return (
            <TouchableOpacity>
                <Image source={require("@res/test.png")} style={{width: 24, height: 24,}} />
            </TouchableOpacity>
        )
    }
    else {
        return (
            <View>
                <Text>잘못 입력 함</Text>
            </View>
        )
    }
    
}