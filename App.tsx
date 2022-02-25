import React from 'react'
import HomePage from '@screens/main/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </MenuProvider>
  );
}
