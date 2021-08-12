import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { enableScreens } from 'react-native-screens'

import AppNavigator from "./navigations/AppNavigator";

enableScreens();


export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
