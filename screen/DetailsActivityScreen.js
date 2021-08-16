import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-paper';
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';

const DetailsActivityScreen = props => {

    return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.screen}>
                    <View style={styles.imgContainer}>
                        <Image source={require('../assets/images/Atomium.jpg')} style={styles.img} resizeMode={"stretch"}  />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>Ceci est le centre de Bruxelles, un des monuments les plus famous de notre belle petite ville qui la capitale de l'europe </Text>
                    </View>
                    <View style={styles.hoursContainer}>
                        <Text numberOfLines={7}>
                            lundi: 10h-20h {"\n"}
                            mardi : 10h-20h {"\n"}
                            mercredi : 10h-20h {"\n"}
                            jeudi : 10h-20h {"\n"}
                            Vendredi : Fermé {"\n"}
                            Samedi : 10h-22h {"\n"}
                            Dimanche : Fermé {"\n"}
                        </Text>
                    </View>
                    <View style={styles.infosContainer}>
                        <Text>
                            Lieu payant
                        </Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <Button uppercase={true} mode="contained" color={'#ffd700'} onPress={() => console.log('modifier')}> Edit </Button>
                        <Button uppercase={true} mode="contained" color={'#b22222'} onPress={() => console.log('supprimer')}> Delete </Button>
                    </View>
                </View>
            </ScrollView>
    );
};

export const screenOptions = nav => {
    return {
        headerTitle: 'Atomium',
        headerRight: () => (
            <FontAwesome
                name="calendar-check-o"
                size={25}
                color="green"
                style={{right:10}}
            />
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems : 'center',
    },
    imgContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        height : 200,
        overflow: 'hidden',
        borderRadius : 10,
        marginTop: 50

    },
    img: {
        width: 300,
        height : 200,
    },
    descriptionContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        borderRadius: 10,
        padding : 5,
        overflow: 'hidden',
        margin: 10
    },
    hoursContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        borderRadius: 10,
        paddingTop: 5,
        paddingLeft: 10,
        margin:10

    },
    infosContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        borderRadius: 10,
        padding : 5,
        margin: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width : '100%',
        margin : 10
    }
});

export default DetailsActivityScreen;