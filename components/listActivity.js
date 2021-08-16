import {useSelector} from "react-redux";
import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import {MyCard} from "./MyCard";

export const ListActivity = props => {
    const activityArray = useSelector(state=>state.reducerActivity.activityArray);
    const renderActivity =dataActivity => {
        return (
            <MyCard
                nav={props.nav}
                sourceImage={dataActivity.item.imageUri}
                titleCard={dataActivity.item.title}
                description={dataActivity.item.description}
                hours={dataActivity.item.hours}
                infoSupp={dataActivity.item.info}
            />
        );
    }

    return (
        <FlatList
            data={activityArray}
            renderItem={renderActivity}
            keyExtractor={(item,index)=>index.toString()}
        >
        </FlatList>
    );
}
