import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import { TextInput, Button} from 'react-native-paper';



const SignInScreen= props => {

    const [textPseudo, setTextPseudo] = useState('');
    const [textPass, setTextPass] = useState('');

    const textEnterFirst = (firstInput) => {
        setTextPseudo(firstInput)
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
                            value={textPseudo}
                            onChangeText={textEnterFirst}
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
                            onChangeText={textPass => setTextPass(textPass)}
                            theme={{ colors: { primary: '#000000',underlineColor:'transparent',}}}
                            required
                        />
                    </View>
                    <View>
                        <Button  uppercase={false} mode="contained" color={'#87cefa'}  onPress={() => console.log('Pressed') }>
                            Sign In
                        </Button>
                    </View>
                    <View style={styles.linkContainer}>
                        <Button  theme={{ colors: { primary: '#0000cd'}}} onPress={() => console.log('register man !')}>
                            Register
                        </Button>
                        <Button theme={{ colors: { primary: '#b22222'}}} onPress={() => console.log('no man !')}>
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