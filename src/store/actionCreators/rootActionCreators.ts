import * as UsersActionCreators from './usersActionCreator'
import * as MessagesActionCreators from './messagesActionCreator'
import * as UserActionCreators from './userActionCreator'

export default {
    ...UsersActionCreators,
    ...MessagesActionCreators,
    ...UserActionCreators
}