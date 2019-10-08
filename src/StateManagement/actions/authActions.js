import firebase from 'firebase';
import {fire, googleAuthProvider} from '../Firebase/Firebase';
import thunk from "redux-thunk";

export const loginWithGoogle = (dispatch) => {
    dispatch({
        type : 'Login_Fetching',
        fetched : false,
        user : null,
        error : null
    })
    fire.auth().signInWithPopup(googleAuthProvider).then(
        (user) => {
            dispatch({
                type : 'Login_Fetched',
                fetched : true,
                user : user.user,
                error : null
            })
        } 
    ).catch((err) => {
            dispatch({
                type : 'Login_Failed',
                user : null,
                fetched : false,
                error : err.error,
            })
        }
    ).finally(() => console.log('Logged In'));
}

export const logout = (dispatch) => {
    dispatch({
        type : 'LogOut_Requested',
        fetched : false,
        payload : null,
        error : null
    })
    
    fire.auth().signOut().then(
        () => dispatch({
            type : 'LogOut_Completed',
            error : null
        })
    ).catch((err) => dispatch({
            type : 'LogOut_Rejected',
            error : err
    }));
}
