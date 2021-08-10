import React, { useState } from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, ScrollView,} from 'react-native';
import {Button, TextInput} from "react-native-paper";


const RegisterScreen = props => {

    const [textPseudo, setTextPseudo] = useState('');
    const [textEmail, setTextEmail] = useState('');
    const [textPass, setTextPass] = useState('');

    const modeVisitorRedirection = () => {
        props.navigation.navigate('Home')
    }
    const signInRedirection = () => {
        props.navigation.navigate('SignIn')
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  behavior={"height"} keyboardVerticalOffset={50} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.screen}>
                    <Text style={styles.titleText}> Register Your Profil </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={textPseudo}
                            placeholder="Pseudo"
                            mode={'outlined'}
                            selectionColor={'purple'}
                            onChangeText={textPseudo => setTextPseudo(textPseudo)}
                            theme={{ colors: { primary: '#000000',underlineColor:'transparent' }}}
                            TextColor={'red'}
                        />
                        <TextInput
                            style={styles.input}
                            value={textEmail}
                            placeholder="Email"
                            mode={'outlined'}
                            selectionColor={'purple'}
                            onChangeText={textEmail => setTextEmail(textEmail)}
                            theme={{ colors: { primary: '#000000',underlineColor:'transparent' }}}
                            TextColor={'red'}
                        />
                        <TextInput
                            style={styles.input}
                            value={textPass}
                            secureTextEntry={true}
                            placeholder="Password"
                            mode={'outlined'}
                            selectionColor={'black'}
                            outlineColor={'black'}
                            onChangeText={textPass => setTextPass(textPass)}
                            theme={{ colors: { primary: '#000000',underlineColor:'transparent',}}}
                        />
                    </View>
                    <View>
                        <Button  uppercase={false} mode="contained" color={'#ffd700'}  onPress={() => console.log('Pressed RegisterScreen') }>
                            Register
                        </Button>
                    </View>
                    <View style={styles.linkContainer}>
                        <Button  theme={{ colors: { primary: '#0000cd'}}} onPress={() => signInRedirection()} >
                            Sign In
                        </Button>
                        <Button theme={{ colors: { primary: '#b22222'}}} onPress={() => modeVisitorRedirection()} >
                            Visitor Mode
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export const screenOptions = nav => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 50
    },
    titleText: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    inputContainer :{
        padding : 2,
        marginBottom :20,
        marginTop : 50
    },
    input: {
        width: 200,
        height: 50,
        textAlign: 'left',
        margin:18,
    },
    linkContainer: {
        marginTop: 30,
        alignItems: 'center'
    }
});

export default RegisterScreen;