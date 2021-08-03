import React from 'react';
import { StyleSheet, View } from 'react-native';

import SignInScreen from "./screen/SignInScreen";
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from "./screen/HomeScreen";
import DetailsActivityScreen from "./screen/DetailsActivityScreen";
import ProfileScreen from "./screen/ProfileScreen";
import EditActivityScreen from "./screen/EditActivityScreen";

// let content = <SignInScreen/>
// let content = <RegisterScreen/>
// let content = <HomeScreen/>
let content = <DetailsActivityScreen />
// let content = <EditActivityScreen/>

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
