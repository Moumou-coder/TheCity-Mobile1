import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Platform} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';

const EditActivityScreen = props => {

    const [ediTitle, setEditTitle] = useState('');
    const titleEnter = (textTitle) => {
        setEditTitle(textTitle)
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const [editDescription, setEditDescription] = useState('');
    const descriptionEnter = (textDInput) => {
        setEditDescription(textDInput)
    }
    const [editHours, setEditHours] = useState('');
    const hoursEnter = (textHInput) => {
        setEditHours(textHInput)
    }
    const [editInfos, setEditInfos] = useState('');
    const infosEnter = (textIInput) => {
        setEditInfos(textIInput)
    }

        return (
            <View style={styles.screen}>
                <View style={styles.containersT}>
                    <ScrollView>
                        <TextInput
                            style={styles.title}
                            placeholder="Title of the activity"
                            mode={'outlined'}
                            selectionColor={'black'}
                            value={ediTitle}
                            onChangeText={titleEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </ScrollView>
                </View>
                <View style={styles.imgContainer}>
                    <Button onPress={pickImage}> Add Image </Button>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
                <View style={styles.containers}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            mode={'flat'}
                            selectionColor={'black'}
                            value={editDescription}
                            onChangeText={descriptionEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </ScrollView>
                </View>
                <View style={styles.containers}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            placeholder="Hours"
                            mode={'flat'}
                            selectionColor={'black'}
                            value={editHours}
                            onChangeText={hoursEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </ScrollView>
                </View>
                <View style={styles.containers}>
                    <ScrollView>
                        <TextInput
                            style={styles.input}
                            placeholder="More Informations"
                            mode={'flat'}
                            selectionColor={'black'}
                            value={editInfos}
                            onChangeText={infosEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </ScrollView>
                </View>
                <View style={styles.btnContainer}>
                    <Button uppercase={false} mode="contained" color={'#ffd700'}
                            onPress={() => console.log('modifier')}> Save </Button>
                    <Button uppercase={false} mode="contained" color={'#b22222'}
                            onPress={() => console.log('supprimer')}> Cancel </Button>
                </View>
            </View>
        );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems : 'center',
        // justifyContent: 'space-evenly'
    },
    containersT: {
        width: 300,
        height : 80,
        overflow: 'hidden',
        marginTop : 30,
    },
    imgContainer: {
        borderColor : 'black',
        borderWidth : 1,
        width: 300,
        height : 200,
        overflow: 'hidden',
        borderRadius : 10,

    },
    img: {
        width: 300,
        height : 200,
    },
    containers: {
        width: 300,
        height : 80,
        overflow: 'hidden',
        marginTop : 5
    },
    input: {
        width: 300,
        height : 70,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width : '100%',
        marginBottom : 10,
        marginTop : 10
    }
});

export default EditActivityScreen;