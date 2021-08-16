import {
    ADD_ACTIIVTY,
    UPADATE_ACTIIVTY,
    DELETE_ACTIIVTY,
    GET_ALL_ACTIIVTY,
    PUT_USERNAME
} from "../actions/activityActions";

const initialState={
    activityArray:[],
    userName:""
};

export const activityReducers = (state=initialState,action)=>{
    switch (action.type){
        case ADD_ACTIIVTY:
            let newArray= [...state.activityArray,action.newActivity];
            return {...state,activityArray: newArray}

        case DELETE_ACTIIVTY:
            let newDeleteArray=state.activityArray.filter(oneActivity=>oneActivity.id!==action.deleteIdActivity)
            return {...state, activityArray: newDeleteArray}

        case GET_ALL_ACTIIVTY:
            return {...state,activityArray: [...action.getAllActivity]}

        case UPADATE_ACTIIVTY:
            let tempoArray=[...state.activityArray.filter(oneActivity=>oneActivity.id!==action.updateIdActivity)]
            tempoArray.unshift(action.updateActivity)
            return {...state,activityArray: tempoArray}
        case PUT_USERNAME:
            return{...state,userName: action.userName}

        default:
            return state;
    }
}