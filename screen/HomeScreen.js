import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {ListActivity} from "../components/listActivity";
import {useDispatch} from "react-redux";
import {getAllActivity} from "../store/actions/activityActions";


const HomeScreen = props => {
const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllActivity())
    })

    return (
        <SafeAreaView style={styles.screen}>
                <View style={styles.firstContainer}>
                    <Text style={styles.titleText}>I ❤ Brussels</Text>
                    <Text style={{fontWeight: "bold", color: 'blue'}}>Weather : 18° </Text>
                </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn1}>
                        <MaterialIcons name="public" size={25} color="black"/>
                    </Button>
                    <Button style={styles.btn} uppercase={true}>
                        <FontAwesome5 name="user-lock" size={20} color="black"/>
                    </Button>
                </View>
                <View style={styles.cardContainer}>
                   <ListActivity nav={props}/>
                </View>
        </SafeAreaView>
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
                style={{right: 10}}
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
    firstContainer: {
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#eae5e5',

    },
    btn1: {
        width: '50%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 0,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    btn: {
        width: '50%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 0,
    },
    cardContainer:{
        marginBottom:180,
    }
});

export default HomeScreen;