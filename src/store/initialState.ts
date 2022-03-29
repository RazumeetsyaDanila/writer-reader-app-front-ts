import { IAuthInitialState } from "../types/authTypes";
import { IMessagesInitialState } from '../types/messagesTypes';
import { IUsersInitialState } from '../types/usersTypes';


export const AuthInitialState: IAuthInitialState = {
    login: '',
    password: '',
    role: '',
    isAuth: false
}

export const MessagesInitialState: IMessagesInitialState = {
    messages: [],
    loading: false,
    error: null
}

export const UsersInitialState: IUsersInitialState = {
    users: [],
    loading: false,
    error: null,
    page: 1,
    limit: 5
}