import { SafeAreaView, SafeAreaViewBase, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { ResearchItem } from '@components/lists/ResearchList/ResearchItem';

export default function SecondPage({ navigation, route }: any) {


  return (
    <ScrollView style={styles.container}>
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
      <ResearchItem />
    </ScrollView>
  );
}

