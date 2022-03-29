import { MessagesInitialState } from '../initialState';
import { IMessagesInitialState, IMessagesAction, MessagesActionTypes } from './../../types/messagesTypes';


export const messagesReducer = (state = MessagesInitialState, action: IMessagesAction): IMessagesInitialState => {
    switch (action.type) {
        case MessagesActionTypes.FETCH_MESSAGES:
            return {loading: true, error: null, messages: []}
        case MessagesActionTypes.FETCH_MESSAGES_SUCCESS:
            return {loading: false, error: null, messages: action.payload}
        case  MessagesActionTypes.FETCH_MESSAGES_ERROR:
            return {loading: false, error: action.payload, messages: []}
        default:
            return state
    }
}