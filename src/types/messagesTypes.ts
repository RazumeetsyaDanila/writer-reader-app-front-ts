export interface IMessagesState {
    messages: any[];
    loading: boolean;
    error: null | string;
}

export enum MessagesActionTypes {
    FETCH_MESSAGES = 'FETCH_MESSAGES',
    FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
    FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR'
}

interface IFetchMessagesAction {
    type: MessagesActionTypes.FETCH_MESSAGES;
}

interface IFetchMessagesSuccessAction {
    type: MessagesActionTypes.FETCH_MESSAGES_SUCCESS;
    payload: any[];
}

interface IFetchMessagesErrorAction {
    type: MessagesActionTypes.FETCH_MESSAGES_ERROR;
    payload: string;
}

export type IMessagesAction = IFetchMessagesAction | IFetchMessagesSuccessAction | IFetchMessagesErrorAction