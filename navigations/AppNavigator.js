import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import {ActivityNavigator, AuthNavigator, TabNavigator} from "./TheCityNavigator";

const AppNavigator = props =>  {

    return(
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
