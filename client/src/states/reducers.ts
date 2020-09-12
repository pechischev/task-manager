import { combineReducers } from 'redux'

import taskReducer from './task'
import columnReducer from './column'
import tagReducer from './tag'

const rootReducer = combineReducers({
  tasks: taskReducer,
  columns: columnReducer,
  tags: tagReducer,
})

export default rootReducer
