import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Button, Switch } from 'react-native-paper';
import {auth} from "../config/config";

const SettingScreen = props => {

    const alertDeleteButton = () =>
        Alert.alert(
            "Do you really want to delete your account ?",
            "😥",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "YES", onPress: () => console.log("OK Pressed") }
            ]
        );

    const alertLogOutButton = () =>
        Alert.alert(
            "Are you sure that you want to log out? ",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log('non'),
                    style: "cancel"
                },
                { text: "YES", onPress: () => signOut()}
            ]
        );

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const logOutRedirection = () => {
        props.navigation.replace('SignIn')
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                logOutRedirection();
            }).catch((error) => {
            console.log(error)
        });
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <View style={styles.viewContainers}>
                    <View style={styles.textContainers}>
                        <Text>NOTIFICATIONS :</Text>
                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <Button mode={'contained'} onPress={alertLogOutButton} color={'#ffa500'}> Log Out </Button>
                    <Button mode={'contained'} onPress={alertDeleteButton } color={'#ff0000'}> Delete Account </Button>
                </View>
                <View style={styles.copyContainer}>
                    <Text style={styles.copy}> TheCity © 2021 version 0.1</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export const screenOptions = nav => {
    return {
        headerTitle: 'Settings',
    };
};

const styles = StyleSheet.create({
    container: {
        alignContent : 'center',
        marginTop: 50,
        marginBottom: 10
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
        width: 300,
    },
    copy: {
        color : 'grey',
        marginTop: 10
    }
});

export default SettingScreen;
