import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Card, Title} from 'react-native-paper';


const HomeScreen = props => {

    return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView style={styles.screen}>
                    <View style={styles.firstContainer}>
                        <Text style={styles.titleText}>I ❤ Brussels</Text>
                        <Text>Weather : </Text>
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
                        <Card style={styles.card}>
                            <Card.Cover style={styles.imgCover} source={{ uri: 'https://picsum.photos/600' }} />
                            <Card.Content style={styles.TitleContainer}>
                                <Title>Card title</Title>
                            </Card.Content>
                        </Card>
                    </View>
                </SafeAreaView>
            </ScrollView>
    );
};

export const screenOptions = nav => {
    return {
        headerTitle: 'Catalog of activities',
    };
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        flex: 1,
    },
    firstContainer:{
        alignItems : 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom : 10
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
        width:'48%',
        height : 185,
        overflow : 'hidden',
        marginBottom : 5
    },
    imgCover: {
        height : 150
    },
    TitleContainer: {
        alignItems: 'center'
    }
});

export default HomeScreen;