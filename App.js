import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignInScreen from "./screen/SignInScreen";

let content = <SignInScreen/>

export default function App() {
  return (
      <View style={styles.container}>
        {content}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
