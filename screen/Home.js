import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";

const Home = props => {

    return(
        <View style={styles.screen}>
            <Text>I ❤ Brussels</Text>
            <Text>Activités : n</Text>
            <View>
                <Text>ce sera un icone qui pourra etre deseable</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} uppercase={false} mode="contained" color={'blue'} >
                    Public
                </Button>
                <Button  style={styles.btn}  uppercase={false} mode="contained" color={'red'} >
                    Private
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop:10
    },
    btn: {
        width:150,
        margin:1
    }
});

export default Home;