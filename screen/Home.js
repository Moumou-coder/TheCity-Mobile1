import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";

const Home = props => {

    const [nbrActivities, setNbrActivities] = useState('0');

    return(
        <View style={styles.screen}>
            <Text style={styles.titleText}>I ❤ Brussels</Text>
            <Text>Activities : {nbrActivities}</Text>
            <View style={styles.icon}>
                <Text>ce sera un icone qui pourra etre deseable</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} uppercase={false} mode="contained" color={'blue'} >
                    Public
                </Button>
                <Button  style={styles.btn}  uppercase={false} mode="contained" color={'green'} >
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
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom : 10
    },
    icon: {
        marginTop: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop:10,
        width: '100%',
        borderColor: 'black',
        borderBottomWidth : 2,
        borderTopWidth : 2,
    },
    btn: {
        width: '50%',
        margin:1
    }
});

export default Home;