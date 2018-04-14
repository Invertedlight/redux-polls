import { combineReducers } from 'redux'
import users from './users'
import polls from './polls'
import authedUsers from './authedUsers'

export default combineReducers({
	authedUsers,
	users,
	polls,
})

