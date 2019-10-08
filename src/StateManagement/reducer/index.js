import {combineReducers} from 'redux';
import {firestoreReducer} from '../reducer/firestoreReducer';
import {stockDataReducer} from './stockDataReducer';
import {authReducer} from './authReducer';

export default combineReducers({
        auth : authReducer,
        fireStore : firestoreReducer,
        stockData : stockDataReducer
})