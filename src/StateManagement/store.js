import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState= {};
const middleware = [
    thunk,
    promise()
]

export const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk))); 

