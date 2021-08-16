import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Card, Title, IconButton} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




const HomeScreen = props => {

    const DetailsActivityRedirection = () => {
        props.navigation.navigate('DetailsActivity')
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.screen}>
                <View style={styles.firstContainer}>
                    <Text style={styles.titleText}>I ❤ Brussels</Text>
                    <Text style={{fontWeight:"bold", color:'blue'}}>Weather : 18° </Text>
                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn1} >
                        <MaterialIcons name="public" size={25} color="black"/>
                    </Button>
                    <Button style={styles.btn} uppercase={true} >
                        <FontAwesome5 name="user-lock" size={20} color="black" />
                    </Button>
                </View>
                <View style={styles.cardContainer}>
                    <Card style={styles.card} onPress={DetailsActivityRedirection}>
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
    const EditActivityRedirection = () => {
        nav.navigation.navigate('EditActivity')
    }

    return {
        headerTitle: 'Catalog of Activities',
        headerRight: () => (
            <FontAwesome5
                name="plus-square"
                size={25}
                color="black"
                style={{right:10}}
                onPress={EditActivityRedirection}
            />
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: 15,
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
        marginBottom: 5,
        width: '100%',
        borderTopWidth:1,
        borderTopColor:'#eae5e5',

    },
    btn1: {
        width: '50%',
        height : 40,
        justifyContent :'center',
        borderRadius :0,
        borderBottomWidth:2,
        borderBottomColor:'black'
    },
    btn: {
        width: '50%',
        height : 40,
        justifyContent :'center',
        borderRadius :0,
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
    },
});

export default HomeScreen;