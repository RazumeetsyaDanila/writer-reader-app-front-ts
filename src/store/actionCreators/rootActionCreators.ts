import * as UsersActionCreators from './usersActionCreator'
import * as MessagesActionCreators from './messagesActionCreator'

export default {
    ...UsersActionCreators,
    ...MessagesActionCreators
}