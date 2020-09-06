import { v4 as uuidv4 } from 'uuid'

import {addTask, removeTask} from './task';
import {popColumnItem, pushColumnItem} from './column';

export const createTask = (task_data, column_id) => {
  const task = { id: uuidv4(), ...task_data};

  return (dispatch) => {
    dispatch(addTask(task));
    dispatch(pushColumnItem(task.id, column_id));
  };
};

export const deleteTask = (task_id, column_id) => {
  return (dispatch) => {
    dispatch(removeTask(task_id));
    dispatch(popColumnItem(task_id, column_id));
  };
};
