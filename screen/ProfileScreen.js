import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {Avatar, Button, Card, Title} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = props => {


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.screen}>
                <View style={styles.firstContainer}>
                    <Avatar.Image size={100} source={require('../assets/images/profilAvatar.jpg')} />
                    <Title style={styles.pseudo}> Moumou </Title>
                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn} uppercase={true} >
                        <FontAwesome name="calendar-check-o" size={25} color="black" />
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
        </ScrollView>
    );
};

export const screenOptions = nav => {
    return {
        headerTitle: 'Profile',
    };
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginTop : 30,
        marginBottom:10
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
        marginBottom: 10,
        width: '100%',
        borderTopWidth:1,
        borderTopColor:'#eae5e5',
        justifyContent:'center'
    },
    btn: {
        width: '98%',
        height : 40,
        justifyContent :'center',
        borderRadius :0,
        borderBottomWidth:2,
        borderBottomColor:'black',
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