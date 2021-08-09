import React, { useState } from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, ScrollView,} from 'react-native';
import {Button, TextInput} from "react-native-paper";


const RegisterScreen = props => {

    const [textPseudo, setTextPseudo] = useState('');
    const [textEmail, setTextEmail] = useState('');
    const [textPass, setTextPass] = useState('');

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
                        <Text style={{color: '#0000cd'}}>
                            Sign in
                        </Text>
                        <Text style={{color: '#b22222', marginTop: 10}}>
                            Visitor Mode
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: 'center',
        // flex: 1,
        justifyContent:'center'
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