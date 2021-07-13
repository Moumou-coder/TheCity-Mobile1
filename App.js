import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from "./screen/SignIn";
import Register from "./screen/Register";

// let content = <SignIn/>
let content = <Register/>

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
