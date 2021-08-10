import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import {ActivityNavigator, AuthNavigator} from "./TheCityNavigator";

const AppNavigator = props =>  {

    return(
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
