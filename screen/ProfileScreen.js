import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = props => {

    return(
        <View style={styles.screen}>
            <Text> My Logo </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    }

});

export default ProfileScreen;