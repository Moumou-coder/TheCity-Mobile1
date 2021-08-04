import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Avatar, Button, Card, Title} from 'react-native-paper';

const ProfileScreen = props => {

    return(
        <View style={styles.screen}>
            <View style={styles.firstContainer}>
                <Avatar.Image size={100} source={require('../assets/images/profilAvatar.jpg')} />
                <Title style={styles.pseudo}> My name ! </Title>
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} uppercase={true} mode="contained" color={'blue'} >
                    Public
                </Button>
                <Button  style={styles.btn}  uppercase={true} mode="contained" color={'green'} >
                    Private
                </Button>
            </View>
            <View style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Cover style={styles.imgCover} source={{ uri: 'https://picsum.photos/600' }} />
                    <Card.Content style={styles.TitleContainer}>
                        <Title>Card title</Title>
                    </Card.Content>
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        margin : 5,
    },
    firstContainer:{
        alignItems : 'center'
    },
    pseudo: {
        color : '#191970'
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop:10,
        marginBottom: 2,
        width: '100%',
        justifyContent: 'space-evenly'
    },
    btn: {
        width: '50%',
        height : 30,
        justifyContent :'center',
        borderRadius :0
    },
    cardContainer :{
        flexDirection: 'row',
        flexWrap : 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    card: {
        width:'80%',
        height : 225,
        overflow : 'hidden',
        marginBottom : 5
    },
    imgCover: {
        height : 190
    },
    TitleContainer: {
        alignItems: 'center'
    }
});

export default ProfileScreen;