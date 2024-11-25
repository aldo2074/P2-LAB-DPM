import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CenteredTextBoxes from './src/components/CenteredTextBoxes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <CenteredTextBoxes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});