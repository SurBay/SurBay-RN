import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { ProgressBar } from '@components/general/ProgressBar';
import { WIDTH } from '@constants/screenSize';

export default function ThirdPage() {
  return (
    <View style={styles.container}>
      <Text>달성률 40%!</Text>
      <ProgressBar progress={0.4} width={WIDTH - 40} height={12} background_color={'gray'} gauge_color={'blue'} />
    </View>
  );
}

