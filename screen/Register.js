import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from "react-native-paper";


const Register = props => {

    const [textPseudo, setTextPseudo] = useState('');
    const [textEmail, setTextEmail] = useState('');
    const [textPass, setTextPass] = useState('');

    return (
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
                <Button  uppercase={false} mode="contained" color={'#ffd700'}  onPress={() => console.log('Pressed Register') }>
                    Register
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
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
        margin:10,
    }
});

export default Register;