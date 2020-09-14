import { v4 as uuidv4 } from 'uuid'

import { Task, taskActions, TaskDto } from './task'
import { columnActions } from './column'
import { AppDispatch } from './store'

export const createTask = (taskData: TaskDto, columnId: string) => {
  const task: Task = { id: uuidv4(), ...taskData }

  return (dispatch: AppDispatch) => {
    dispatch(taskActions.addTask(task))
    dispatch(columnActions.pushItem({ itemId: task.id, columnId }))
  }
}

export const updateTask = (taskId: string, taskData: TaskDto) => {
  return (dispatch: AppDispatch) => {
    dispatch(taskActions.editTask({ id: taskId, ...taskData }))
    // TODO: here will change the type project
  }
}

export const deleteTask = (taskId: string, columnId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(taskActions.removeTask(taskId))
    dispatch(columnActions.popItem({ itemId: taskId, columnId }))
  }
}
