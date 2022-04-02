import { Dispatch } from "react"
import { $authHost } from "../../http"
import { IUsersAction, UsersActionTypes } from '../../types/usersTypes';


export const fetchUsers = (page = 1, limit = 5) => {
    return async (dispatch: Dispatch<IUsersAction>) => {
        try {
            dispatch({ type: UsersActionTypes.FETCH_USERS })
            const { data } = await $authHost.get('api/admin/users', {
                params: { _page: page, _limit: limit }
            })
            dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: data })


        } catch (e) {
            dispatch({ type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке списка пользователей!' })
        }
    }
}

export function setUsersPage(page: number): IUsersAction {
    return { type: UsersActionTypes.SET_USERS_PAGE, payload: page }
}