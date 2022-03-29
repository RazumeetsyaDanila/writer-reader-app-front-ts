import { combineReducers } from "redux";
import { messagesReducer } from './messagesReducer';
import { usersReducer } from './usersReducer';


export const  rootReducer = combineReducers({
    messages: messagesReducer,
    users: usersReducer
})

export type rootState = ReturnType<typeof rootReducer>