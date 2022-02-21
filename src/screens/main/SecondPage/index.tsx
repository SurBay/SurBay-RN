import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { ResearchItem } from '@components/lists/ResearchList/ResearchItem';

export default function SecondPage({ navigation }: any) {
  return (
    <View>
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
    </View>
  );
}

