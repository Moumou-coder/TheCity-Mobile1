import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Platform, KeyboardAvoidingView} from 'react-native';
import {Button, TextInput} from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import {useDispatch} from "react-redux";
import {addActivity} from "../store/actions/activityActions";
import PushNotification from "react-native-push-notification"
import * as Notifications from 'expo-notifications';
const EditActivityScreen = props => {


    const dispatch=useDispatch()
    // PushNotification.configure({
    //     onNotification:()=>{console.log("Notification recu")}
    // })

    // async function schedulePushNotification() {
    //     await Notifications.scheduleNotificationAsync({
    //         content: {
    //             title: "You've got mail! 📬",
    //             body: 'Here is the notification body',
    //             data: { data: 'goes here' },
    //         },
    //         trigger: { seconds: 2 },
    //     });
    // }
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

    const [editTitle, setEditTitle] = useState('');
    const titleEnter = (textTitle) => {
        setEditTitle(textTitle)
    }

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

    const createActivity=async () => {
        const activityObject = {
            title: editTitle,
            description: editDescription,
            imageUri: image,
            hours: editHours,
            info: editInfos
        }
        dispatch(addActivity(activityObject))
        props.navigation.navigate("Home")
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  behavior={"height"} keyboardVerticalOffset={50} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.screen}>
                    <View style={styles.containersT}>
                        <TextInput
                            style={styles.title}
                            placeholder="Title of the activity"
                            mode={'outlined'}
                            selectionColor={'black'}
                            value={editTitle}
                            onChangeText={titleEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </View>
                    <View style={styles.imgContainer}>
                        <Button onPress={pickImage}> Add Image </Button>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    </View>
                    <View style={styles.containers}>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            placeholder="Description"
                            mode={'flat'}
                            selectionColor={'black'}
                            value={editDescription}
                            onChangeText={descriptionEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </View>
                    <View style={styles.containers}>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            placeholder="Hours"
                            mode={'flat'}
                            selectionColor={'black'}
                            value={editHours}
                            onChangeText={hoursEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </View>
                    <View style={styles.containers}>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            placeholder="More Informations"
                            mode={'flat'}
                            selectionColor={'black'}
                            value={editInfos}
                            onChangeText={infosEnter}
                            theme={{colors: {primary: '#00008b', underlineColor: 'transparent'}}}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button uppercase={false} mode="contained" color={'#ffd700'}
                                onPress={createActivity}> Save </Button>
                        {/*<Button uppercase={false} mode="contained" color={'#b22222'}*/}
                        {/*        onPress={() => console.log('supprimer')}> Cancel </Button>*/}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export const screenOptions = nav => {
    return {
        headerTitle: 'Add Activity',
    };
};

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        alignItems : 'center',
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
        marginTop : 15,
    },
    input: {
        width: 300,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width : '100%',
        marginBottom : 70,
        marginTop : 10
    }
});

export default EditActivityScreen;