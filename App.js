import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {enableScreens} from 'react-native-screens'
import {Provider} from "react-redux"
import AppNavigator from "./navigations/AppNavigator";
import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import {activityReducers} from "./store/reducers/activityReducers";

enableScreens();

export default function App() {

    const rootReducer = combineReducers({
        reducerActivity:activityReducers
    })
    const store = createStore(rootReducer, applyMiddleware(thunk))

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <AppNavigator/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
