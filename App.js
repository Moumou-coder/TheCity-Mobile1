import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import AppNavigator from "./navigations/AppNavigator";

import SignInScreen from "./screen/SignInScreen";
import RegisterScreen from "./screen/RegisterScreen";
import HomeScreen from "./screen/HomeScreen";
import DetailsActivityScreen from "./screen/DetailsActivityScreen";
import ProfileScreen from "./screen/ProfileScreen";
import EditActivityScreen from "./screen/EditActivityScreen";
import SettingScreen from "./screen/SettingScreen";
import {ActivityNavigator, TabNavigator} from "./navigations/TheCityNavigator";

// let content = <SignInScreen/>
// let content = <RegisterScreen/>
// let content = <HomeScreen/>
// let content = <DetailsActivityScreen />
// let content = <EditActivityScreen/>
// let content = <ProfileScreen/>
// let content = <SettingScreen />

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
