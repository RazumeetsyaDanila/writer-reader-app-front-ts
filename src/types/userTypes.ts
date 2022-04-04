export interface IUserState {
    login: string,
    role: string,
    id: number,
    isAuth: boolean
}

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    UNSET_USER = 'UNSET_USER'
}

interface ISetUserAction {
    type: UserActionTypes.SET_USER,
    payload: {login: string, role: string, id: number}
}

interface IUnsetUser {
    type: UserActionTypes.UNSET_USER
}

export type IUserAction = ISetUserAction | IUnsetUser