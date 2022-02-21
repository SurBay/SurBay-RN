import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { useGlobalStyles } from '@hooks/useGlobalStyles';
import { ExitAppModal } from '@components/modals/ExitAppModal';
import { RoundImage } from '@components/simple/Roundimage';
import { ResearchItem } from '@components/lists/ResearchList/ResearchItem';

export default function HomePage() {

  const globalStyles = useGlobalStyles()
  return (
    <View style={styles.container}>
      
    </View>
  );
}