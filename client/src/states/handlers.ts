import { v4 as uuidv4 } from 'uuid';

import {ITask, taskActions, TaskDto} from './task';
import {columnActions} from './column';
import {AppDispatch} from './store';

export const createTask = (task_data: TaskDto, column_id: string) => {
  const task: ITask = { id: uuidv4(), ...task_data};

  return (dispatch: AppDispatch) => {
    dispatch(taskActions.addTask(task));
    dispatch(columnActions.pushItem({item_id: task.id, column_id}));
  };
};

export const updateTask = (task_id: string, task_data: TaskDto) => {
  return (dispatch: AppDispatch) => {
    dispatch(taskActions.editTask({id: task_id, ...task_data}));
    // TODO: here will change the type project
  };
}

export const deleteTask = (task_id: string, column_id: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(taskActions.removeTask(task_id));
    dispatch(columnActions.popItem({item_id: task_id, column_id}));
  };
};
