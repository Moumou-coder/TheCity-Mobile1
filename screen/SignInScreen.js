import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput, Button} from 'react-native-paper';


const SignInScreen= props => {

    const [textP, setTextP] = useState('');
    const [textM, setTextM] = useState('');

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The City v1</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={textP}
                    placeholder="Pseudo"
                    mode={'outlined'}
                    selectionColor={'black'}
                    outlineColor={'black'}
                    onChangeText={textP => setTextP(textP)}
                />
                <TextInput
                    style={styles.input}
                    value={textM}
                    placeholder="Password"
                    mode={'outlined'}
                    selectionColor={'black'}
                    outlineColor={'black'}
                    onChangeText={textM => setTextM(textM)}
                />
            </View>
            <View>
                <Button  uppercase={false} mode="contained" color={'#87cefa'}  onPress={() => console.log('Pressed') }>
                    Sign in
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        alignItems: 'center'
    },
    title: {

    },
    inputContainer :{
        marginTop : 50,
        padding : 2,
        marginBottom :30
    },
    input: {
        width: 200,
        height: 50,
        textAlign: 'left',
        margin:10
    },
});

export default SignInScreen;