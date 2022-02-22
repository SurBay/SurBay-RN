import React from 'react'
import HomePage from '@screens/main/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';

export default function App() {
  return (
      
    <NavigationContainer>
        <RootNavigation />
    </NavigationContainer>
  );
}
