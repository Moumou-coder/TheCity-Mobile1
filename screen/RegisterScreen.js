import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Alert} from 'react-native';
import {Button, TextInput, Snackbar} from "react-native-paper";
import {dbh} from "../config/config";
import {auth} from "../config/config";

const RegisterScreen = props => {

    const [textPseudo, setTextPseudo] = useState('');
    const [textEmail, setTextEmail] = useState('');
    const [textPass, setTextPass] = useState('');

    //redireciton without back possibility
    const modeVisitorRedirection = () => {
        props.navigation.replace('Home')
    }
    const signInRedirection = () => {
        props.navigation.navigate('SignIn')
    }

    const submitFormRegister = () => {
        auth.createUserWithEmailAndPassword(textEmail, textPass)
            .then((userCredential) => {
                onToggleSnackBar()
                dbh.collection("Users").doc(userCredential.user.email).set({pseudo: textPseudo})
                setTimeout(() => {
                    signInRedirection()
                }, 3500);

            }).catch((error) => {
            Alert.alert(
                "Message Error",
                "This mail exist already ! Please try another ",
                [
                    {
                        text: "OK",
                    },
                ],
                {
                    cancelable: true
                }
            );
        })


    }

    const [visibleBar, setVisibleBar] = React.useState(false);
    const onToggleSnackBar = () => setVisibleBar(!visibleBar);
    const onDismissSnackBar = () => setVisibleBar(false);

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={"height"} keyboardVerticalOffset={50}>
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
                            theme={{colors: {primary: '#000000', underlineColor: 'transparent'}}}
                            TextColor={'red'}
                        />
                        <TextInput
                            style={styles.input}
                            value={textEmail}
                            placeholder="Email"
                            mode={'outlined'}
                            selectionColor={'purple'}
                            onChangeText={textEmail => setTextEmail(textEmail)}
                            theme={{colors: {primary: '#000000', underlineColor: 'transparent'}}}
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
                            theme={{colors: {primary: '#000000', underlineColor: 'transparent',}}}
                        />
                    </View>
                    <View>
                        <Button uppercase={false} mode="contained" color={'#ffd700'} onPress={submitFormRegister}>
                            Register
                        </Button>
                    </View>
                    <View style={styles.linkContainer}>
                        <Button theme={{colors: {primary: '#0000cd'}}} onPress={signInRedirection}>
                            Sign In
                        </Button>
                        <Button theme={{colors: {primary: '#b22222'}}} onPress={modeVisitorRedirection}>
                            Visitor Mode
                        </Button>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: 70}}>
                        <Snackbar
                            visible={visibleBar}
                            onDismiss={onDismissSnackBar}
                            duration={3000}
                            action={{
                                label: 'Undo',
                            }}>
                            Hey ! You have been registered .
                        </Snackbar>
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
        justifyContent: 'center',
        marginTop: 50
    },
    titleText: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    inputContainer: {
        padding: 2,
        marginBottom: 20,
        marginTop: 33
    },
    input: {
        width: 200,
        height: 50,
        textAlign: 'left',
        margin: 15,
    },
    linkContainer: {
        marginTop: 30,
        alignItems: 'center'
    },
});

export default RegisterScreen;