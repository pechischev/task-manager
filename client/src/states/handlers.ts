import { v4 as uuidv4 } from 'uuid'

import { Task, taskActions } from './task'
import { columnActions } from './column'
import { AppDispatch } from './store'
import { TaskFormDto } from './interfaces'

export const createTask = (taskData: TaskFormDto, columnId: string) => {
  const { tags, ...rest } = taskData
  const task: Task = { id: uuidv4(), ...rest }

  return (dispatch: AppDispatch) => {
    dispatch(taskActions.addTask(task))
    dispatch(columnActions.pushItem({ itemId: task.id, columnId }))
  }
}

export const updateTask = (taskId: string, taskData: TaskFormDto) => {
  const { tags, ...rest } = taskData

  return (dispatch: AppDispatch) => {
    dispatch(taskActions.editTask({ id: taskId, ...rest }))
    // TODO: here will change the type project
  }
}

export const deleteTask = (taskId: string, columnId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch(taskActions.removeTask(taskId))
    dispatch(columnActions.popItem({ itemId: taskId, columnId }))
  }
}
