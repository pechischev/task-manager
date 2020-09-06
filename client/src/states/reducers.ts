import {combineReducers} from 'redux';

import taskReducer from './task';
import columnReducer from './column';

const rootReducer = combineReducers({
  tasks: taskReducer,
  columns: columnReducer,
});

export default rootReducer;
