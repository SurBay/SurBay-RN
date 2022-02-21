import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootNavigatorProps } from '@navigation/RootNavigation';

export default function SplashPage( { navigation, route }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("main")
    }, 2000)
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate("main")} }>
        <Text>로딩중입니다.</Text>
      </TouchableOpacity>
    </View>
  );
}
