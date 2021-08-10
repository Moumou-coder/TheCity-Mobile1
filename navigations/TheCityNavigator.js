import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen, {screenOptions as homeScreenOptions} from "../screen/HomeScreen";
import SettingScreen, {screenOptions as settingsScreenOptions} from "../screen/SettingScreen";
import DetailsActivityScreen, {screenOptions as detailsActivityScreenOptions } from "../screen/DetailsActivityScreen";
import EditActivityScreen, {screenOptions as editActivityScreenOptions} from "../screen/EditActivityScreen";
import SignInScreen, {screenOptions as SingInScreenOptions} from "../screen/SignInScreen";
import RegisterScreen, {screenOptions as RegisterScreenOptions}from "../screen/RegisterScreen";
import ProfileScreen, {screenOptions as ProfileScreenOptions} from "../screen/ProfileScreen";

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
                name={"SignIn"}
                component={SignInScreen}
                options={SingInScreenOptions}
            />
            <AuthStackNavigator.Screen
                name={"Register"}
                component={RegisterScreen}
                options={RegisterScreenOptions}
            />
            <AuthStackNavigator.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={ProfileScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    );
}




const TheCityNavigator = props =>  {

    return(
        <NavigationContainer>

        </NavigationContainer>
    );
};

export default TheCityNavigator;