import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen, {screenOptions as homeScreenOptions} from "../screen/HomeScreen";
import SettingScreen, {screenOptions as settingsScreenOptions} from "../screen/SettingScreen";
import DetailsActivityScreen, {screenOptions as detailsActivityScreenOptions } from "../screen/DetailsActivityScreen";
import EditActivityScreen, {screenOptions as editActivityScreenOptions} from "../screen/EditActivityScreen";
import SignInScreen, {screenOptions as SingInScreenOptions} from "../screen/SignInScreen";
import RegisterScreen, {screenOptions as RegisterScreenOptions}from "../screen/RegisterScreen";
import ProfileScreen, {screenOptions as ProfileScreenOptions} from "../screen/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {View, Text} from "react-native";
import {Ionicons, AntDesign } from "@expo/vector-icons";


const defaultNavigationOptions = {
    headerStyle: {height: 65},
    headerTitleStyle: { alignSelf: 'center'},
}

const ActivityStackNavigator = createStackNavigator();
export const ActivityNavigator = () => {
    return(
        <ActivityStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
            <ActivityStackNavigator.Screen
                name={"Home"}
                component={HomeScreen}
                options={homeScreenOptions}
            />
            <ActivityStackNavigator.Screen
                name={"DetailsActivity"}
                component={DetailsActivityScreen}
                options={detailsActivityScreenOptions}
            />
            <ActivityStackNavigator.Screen
                name={"EditActivity"}
                component={EditActivityScreen}
                options={editActivityScreenOptions}
            />
        </ActivityStackNavigator.Navigator>
    );
}

const SettingStackNavigator = createStackNavigator();
export const SettingNavigator = () => {
    return(
        <SettingStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
            <SettingStackNavigator.Screen
                name={"Settings"}
                component={SettingScreen}
                options={settingsScreenOptions}
            />
        </SettingStackNavigator.Navigator>
    );
}

const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
    return(
        <AuthStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
            <AuthStackNavigator.Screen
                name={"Register"}
                component={RegisterScreen}
                options={RegisterScreenOptions}
            />
            <AuthStackNavigator.Screen
                name={"SignIn"}
                component={SignInScreen}
                options={SingInScreenOptions}
            />
            <AuthStackNavigator.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={ProfileScreenOptions}
            />
            <AuthStackNavigator.Screen
                name={"Home"}
                component={HomeScreen}
                options={homeScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    );
}


const TabBottomNavigator = createBottomTabNavigator();
export const TabNavigator = () => {
    return(
        <TabBottomNavigator.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    position: 'absolute',
                    backgroundColor:'#f8f8ff',
                    elevation:0,
                    height:50,
                    paddingTop:8,
                    paddingBottom:8,
                    borderRadius:10
                }
            }}
        >
            <TabBottomNavigator.Screen
                name={"Home"}
                component={ActivityNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent:'center', top:2}}>
                            <Ionicons
                                name="home"
                                size={20}
                                color={focused ? "#dc143c" : "black"}
                            />
                            <Text
                                style={{color:focused ? "#dc143c" : "black", fontSize:11}} >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />
            <TabBottomNavigator.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent:'center', top:2}}>
                            <AntDesign
                                name="profile"
                                size={20}
                                color={focused ? "#dc143c" : "black"}
                            />
                            <Text
                                style={{color:focused ? "#dc143c" : "black", fontSize:11}} >
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />
            <TabBottomNavigator.Screen
                name={"Settings"}
                component={SettingNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent:'center', top:2}}>
                            <Ionicons
                                name="settings"
                                size={20}
                                color={focused ? "#dc143c" : "black"}
                            />
                            <Text
                                style={{color:focused ? "#dc143c" : "black", fontSize:11}} >
                                Settings
                            </Text>
                        </View>
                    ),
                }}
            />
        </TabBottomNavigator.Navigator>
    );
}


const TheCityNavigator = props =>  {
};

export default TheCityNavigator;