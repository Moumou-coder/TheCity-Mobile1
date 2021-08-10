import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen, {screenOptions as homeScreenOptions} from "../screen/HomeScreen";
import SettingScreen, {screenOptions as settingsScreenOptions} from "../screen/SettingScreen";
import DetailsActivityScreen, {screenOptions as detailsActivityScreenOptions } from "../screen/DetailsActivityScreen";
import EditActivityScreen, {screenOptions as editActivityScreenOptions} from "../screen/EditActivityScreen";

const defaultNavigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
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




const TheCityNavigator = props =>  {

    return(
        <NavigationContainer>

        </NavigationContainer>
    );
};

export default TheCityNavigator;