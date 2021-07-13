import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Linking} from 'react-native';
import { TextInput, Button} from 'react-native-paper';


const SignIn= props => {

    const [textPseudo, setTextPseudo] = useState('');
    const [textPass, setTextPass] = useState('');

    return (
        <View style={styles.screen}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo/logo.png')} style={styles.logo} />
            </View>
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
                <Button  uppercase={false} mode="contained" color={'#87cefa'}  onPress={() => console.log('Pressed') }>
                    Sign in
                </Button>
            </View>
            {/*<View style={styles.linkContainer}>*/}
            {/*    <Text style={{color: '#0000cd'}} onPress={() => Linking.openURL('http://google.com')}>*/}
            {/*        Register*/}
            {/*    </Text>*/}
            {/*</View>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
    },
    title: {

    },
    inputContainer :{
        padding : 2,
        marginBottom :20,
    },
    input: {
        width: 200,
        height: 50,
        textAlign: 'left',
        margin:10,
    },
    logoContainer: {
        width: 300,
        height: 300
    },
    logo: {
        flex:1,
        width: null,
        height: null,
        resizeMode:'contain'
    },
    // linkContainer: {
    //     marginTop : 20,
    // }
});

export default SignIn;