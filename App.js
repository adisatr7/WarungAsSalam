import React from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import NavigationBar from './app/components/NavigationBar'

import HomeScreen from './app/screens/HomeScreen'
import colors from './app/assets/Color'

export default function App() {
  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
