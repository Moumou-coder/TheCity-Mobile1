export const ADD_ACTIIVTY='ADD_ACTIVITY'
export const GET_ALL_ACTIIVTY='GET_ACTIVITY'
export const DELETE_ACTIIVTY='DELETE_ACTIVITY'
export const UPADATE_ACTIIVTY='UPDATE_ACTIVITY'
import {dbh} from '../../config/config'

export const addActivity=(activity)=>{
    return async dispatch=>{
        dbh.collection("Activity").add(activity)
        dispatch({type:ADD_ACTIIVTY,newActivity:activity})
    }
}
export const getAllActivity=()=>{
    return async dispatch=>{
        const AllActivity=[];
        dbh.collection("Activity").get().then(snapshot=>snapshot.forEach(doc => AllActivity.push(doc)))
        dispatch({type:GET_ALL_ACTIIVTY,getALlActivity:allActivity})
    }
}
export const deleteActivity=(idActivity)=>{
    return async dispatch=>{
        dbh.collection("Activity").doc(idActivity).delete()
        dispatch({type:DELETE_ACTIIVTY,deleteIdActivity:idActivity})
    }
}
export const updateActivity=(idActivity, activity)=>{
    return async dispatch=>{
        dbh.collection("Activity").doc(idActivity).set(activity)
        dispatch({type:UPADATE_ACTIIVTY,updateIdActivity:idActivity,updateActivity:activity})
    }
}