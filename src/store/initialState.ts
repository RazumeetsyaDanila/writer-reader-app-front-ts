import { IMessagesState } from '../types/messagesTypes';
import { IUsersState } from '../types/usersTypes';
import { IUserState } from '../types/userTypes';


export const MessagesInitialState: IMessagesState = {
    messages: [],
    loading: false,
    error: null
}

export const UsersInitialState: IUsersState = {
    users: [],
    loading: false,
    error: null,
    page: 1,
    limit: 5
}

export const UserInitialState: IUserState = {
    login: '',
    role: '',
    isAuth: false
}