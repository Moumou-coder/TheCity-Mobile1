import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title} from 'react-native-paper';

export const MyCard = props => {

    const objectActivity={
        title:props.titleCard,
        description:props.description,
        image:props.sourceImage,
        hours:props.hours,
        info:props.infoSupp
    }
    const DetailsActivityRedirection = () => {
        props.nav.navigation.navigate('DetailsActivity',objectActivity)
    }

    return (
        <View style={styles.cardContainer}>
            <Card style={styles.card} onPress={DetailsActivityRedirection} >
                <Card.Cover style={styles.imgCover} source={{uri:props.sourceImage }}/>
                <Card.Content style={styles.TitleContainer}>
                    <Title>{props.titleCard}</Title>
                </Card.Content>
            </Card>
        </View>
    );

};

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems:'center'
    },
    card: {
        width: '80%',
        height: 185,
        overflow: 'hidden',
        marginBottom: 5
    },
    imgCover: {
        height: 150
    },
    TitleContainer: {
        alignItems: 'center'
    },});

