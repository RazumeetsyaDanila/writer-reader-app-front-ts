export interface IUsersState {
    users: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_USERS_PAGE = 'SET_USERS_PAGE'
}

interface IFetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface IFetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface ISetUsersPage {
    type: UsersActionTypes.SET_USERS_PAGE;
    payload: number;
}

export type IUsersAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction | ISetUsersPage