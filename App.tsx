import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomePage from '@screens/main/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';
import RouteContextProvider from '@context/RouteContextProvider';

export default function App() {
  return (
      
    <RouteContextProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </RouteContextProvider>
  );
}
