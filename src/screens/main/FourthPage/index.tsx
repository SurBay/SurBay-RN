import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function FourthPage() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Text style={{paddingHorizontal: 10, paddingVertical: 3, backgroundColor: "#EEEEEE", fontSize: 10, borderRadius: 15, color: "#8F8F8F"}}>안녕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

