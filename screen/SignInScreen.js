import React, { useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import {dbh} from "../config/config";
import firebase from "firebase";
import {auth} from "../config/config";



const SignInScreen= props => {

    const [textMail, setTextMail] = useState('');
    const [textPass, setTextPass] = useState('');

    const registerRedirection = () => {
        props.navigation.navigate('Register')
    }
    const modeVisitorRedirection = () => {
        props.navigation.navigate('Home')
    }
    const verificationSubmit = () => {
        auth.signInWithEmailAndPassword(textMail.toString().trim(), textPass.toString().trim())
            .then((userCredential) => {
                console.log( textMail, textPass)

                // var user = userCredential.user; utiliser avec redux
                modeVisitorRedirection();
            })
            .catch((error) => {console.log(error)});
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  behavior={"height"} keyboardVerticalOffset={30} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.screen}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/logo/logo.png')} style={styles.logo} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Pseudo"
                            mode={'outlined'}
                            selectionColor={'purple'}
                            value={textMail}
                            onChangeText={setTextMail}
                            theme={{ colors: { primary: '#000000',underlineColor:'transparent' }}}
                            TextColor={'red'}
                            required
                        />
                        <TextInput
                            style={styles.input}
                            value={textPass}
                            secureTextEntry={true}
                            placeholder="Password"
                            mode={'outlined'}
                            selectionColor={'black'}
                            outlineColor={'black'}
                            onChangeText={setTextPass}
                            theme={{ colors: { primary: '#000000',underlineColor:'transparent',}}}
                            required
                        />
                    </View>
                    <View>
                        <Button  uppercase={false} mode="contained" color={'#87cefa'}  onPress={verificationSubmit}>
                            Sign In
                        </Button>
                    </View>
                    <View style={styles.linkContainer}>
                        <Button  theme={{ colors: { primary: '#0000cd'}}} onPress={() => registerRedirection()}>
                            Register
                        </Button>
                        <Button theme={{ colors: { primary: '#b22222'}}} onPress={() => modeVisitorRedirection()}>
                            Visitor Mode
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export const screenOptions = nav => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    inputContainer :{
        padding : 2,
        marginBottom :10,
    },
    input: {
        width: 200,
        height: 50,
        textAlign: 'left',
        margin:12,
    },
    logoContainer: {
        width: 270,
        height: 270
    },
    logo: {
        flex:1,
        width: null,
        height: null,
        resizeMode:'contain'
    },
    linkContainer: {
        marginTop: 30,
        alignItems: 'center'
    }
});

export default SignInScreen;