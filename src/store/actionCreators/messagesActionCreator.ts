import { Dispatch } from "react"
import { $authHost } from "../../http"
import { IMessagesAction, MessagesActionTypes } from "../../types/messagesTypes"


export const fetchMessages = () => {
    return async (dispatch: Dispatch<IMessagesAction>) => {
        try {
            dispatch({ type: MessagesActionTypes.FETCH_MESSAGES })
            const { data } = await $authHost.get('api/reader/get_all_messages', {})
            setTimeout(() => {
                dispatch({ type: MessagesActionTypes.FETCH_MESSAGES_SUCCESS, payload: data })
            }, 500)
        } catch (e) {
            dispatch({ type: MessagesActionTypes.FETCH_MESSAGES_ERROR, payload: 'Ошибка при загрузке сообщений!' })
        }
    }
}

export const fetchUserMessages = (user_id: number) => {
    return async (dispatch: Dispatch<IMessagesAction>) => {
        try {
            dispatch({ type: MessagesActionTypes.FETCH_MESSAGES })
            const { data } = await $authHost.post('api/writer/messages_get', { user_id: user_id })
            dispatch({ type: MessagesActionTypes.FETCH_MESSAGES_SUCCESS, payload: data })
        } catch (e) {
            dispatch({ type: MessagesActionTypes.FETCH_MESSAGES_ERROR, payload: 'Ошибка при загрузке сообщений!' })
        }
    }
}