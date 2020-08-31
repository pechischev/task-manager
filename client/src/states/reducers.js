import {combineReducers} from 'redux';

import {taskReducer} from './task';
import {columnReducer} from './column';

export default combineReducers({
  tasks: taskReducer,
  columns: columnReducer,
});
