import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const SettingScreen = props => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainers}>
                <View style={styles.textContainers}>
                    <Text>PSEUDO : "pseudo" </Text>
                </View>
                <View style={styles.textContainers}>
                    <Text>NOTIFICATIONS :</Text>
                    <Text>button</Text>
                </View>
                <View style={styles.textContainers}>
                    <Text>DARK THEME :</Text>
                    <Text>button</Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button mode={'contained'} onPress={() => console.log('se déconnecter')} color={'#ffa500'}> Log Out </Button>
                <Button mode={'contained'} onPress={() => console.log('suppirmer account')} color={'#ff0000'}> Delete Account </Button>
            </View>
            <View style={styles.copyContainer}>
                <Text style={styles.copy}> TheCity © 2021 version 0.1</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent : 'center',
        margin: 20,
        justifyContent: 'space-evenly'

    },
    viewContainers: {
        width: '100%',
    },
    textContainers: {
        margin: 20,
        borderWidth : 3,
        borderColor : '#696969',
        width: 320,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5
    },
    btnContainer: {
        margin: 35,
        height: 120,
        justifyContent: 'space-around'
    },
    copyContainer: {
        alignItems: 'center',
        marginLeft : 30,
        borderTopWidth: 1,
        borderTopColor: 'black',
        width: 300
    },
    copy: {
        color : 'grey',
        marginTop: 10
    }
});

export default SettingScreen;