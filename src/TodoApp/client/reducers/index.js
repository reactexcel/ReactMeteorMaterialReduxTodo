import {todos} from './entities/todos'
import {users} from './entities/users'
import {ui} from './ui/index'

import { combineReducers } from 'redux-immutable'

export default combineReducers({
  todos,
  users,
  ui
})