import { combineReducers } from "redux";
import { messagesReducer } from './messagesReducer';
import { usersReducer } from './usersReducer';
import { userReducer } from './userReducer';


export const  rootReducer = combineReducers({
    user: userReducer,
    messages: messagesReducer,
    users: usersReducer
    
})

export type rootState = ReturnType<typeof rootReducer>