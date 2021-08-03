import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Button} from "react-native-paper";

const EditActivityScreen = props => {

    return(
        <View style={styles.screen}>
            <Text> il y aura un header avec redux et 2 icons </Text>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/images/picsadd.png')} style={styles.img} resizeMode={"stretch"}  />
            </View>
            <View style={styles.descriptionContainer}>
                <ScrollView>
                    <Text> ceic sera transformé en input text</Text>
                </ScrollView>
            </View>
            <View style={styles.hoursContainer}>
                <ScrollView>
                    <Text> ceic sera transformé en input text</Text>
                </ScrollView>
            </View>
            <View style={styles.infosContainer}>
                <ScrollView>
                    <Text> ceic sera transformé en input text</Text>
                </ScrollView>
            </View>
            <View style={styles.btnContainer}>
                <Button uppercase={false} mode="contained" color={'#ffd700'} onPress={() => console.log('modifier')}> Save </Button>
                <Button uppercase={false} mode="contained" color={'#b22222'} onPress={() => console.log('supprimer')}> Cancel </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    imgContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        height : 200,
        overflow: 'hidden',
        borderRadius : 10

    },
    img: {
        width: 300,
        height : 200,
    },
    descriptionContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        height : 80,
        borderRadius: 10,
        padding : 5,
        overflow: 'hidden'
    },
    hoursContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        height : 80,
        borderRadius: 10,
        paddingTop: 5,
        paddingLeft: 10

    },
    infosContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        height : 70,
        borderRadius: 10,
        padding : 5,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width : '100%'
    }
});

export default EditActivityScreen;