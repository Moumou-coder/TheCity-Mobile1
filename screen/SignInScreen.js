import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import { TextInput, Button} from 'react-native-paper';



const SignInScreen= props => {

    const [textPseudo, setTextPseudo] = useState('');
    const [textPass, setTextPass] = useState('');

    const textEnterFirst = (firstInput) => {
        setTextPseudo(firstInput)
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  behavior={"height"} keyboardVerticalOffset={50} >
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
                    <View style={styles.linkContainer}>
                        <Text style={{color: '#0000cd'}}>
                            Register
                        </Text>
                        <Text style={{color: '#b22222', marginTop: 5}}>
                            Visitor Mode
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: 'center',
        margin : 20
        // flex: 1,
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