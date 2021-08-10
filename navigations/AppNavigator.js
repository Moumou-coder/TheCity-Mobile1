import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import {ActivityNavigator} from "./TheCityNavigator";

const AppNavigator = props =>  {

    return(
        <NavigationContainer>
            <ActivityNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
