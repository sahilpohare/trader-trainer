import { strict } from "assert";

const initialState = {
    user : null
}

export const authReducer = (state = {}, action) =>{
    switch(action.type){
        case "Login_Fetching":
            return ({
                ...action
            })
        case "Login_Fetched":
            return ({
                ...action
            })
        case "Login_Failed":
            return ({
                ...action
            })
        case 'logout':
            break;
        default :
            return state;
    }
}