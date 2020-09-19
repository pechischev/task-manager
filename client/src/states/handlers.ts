import { v4 as uuidv4 } from 'uuid'

import { Task, taskActions } from './task'
import { columnActions } from './column'
import { tagActions } from './tag'

import { AppDispatch } from './store'
import { TaskFormDto } from './interfaces'

export const createTask = (taskData: TaskFormDto) => {
  const { tags = [], columnId, ...rest } = taskData
  const task: Task = { id: uuidv4(), ...rest }

  return (dispatch: AppDispatch) => {
    dispatch(taskActions.addTask(task))
    dispatch(columnActions.pushItem({ itemId: task.id, columnId }))
    dispatch(tagActions.pushItems({ itemId: task.id, tagIds: tags }))
  }
}

export const updateTask = (taskId: string, taskData: TaskFormDto) => {
  const { tags = [], ...rest } = taskData

  return (dispatch: AppDispatch) => {
    dispatch(taskActions.editTask({ id: taskId, ...rest }))
    dispatch(tagActions.replaceItems({ itemId: taskId, tagIds: tags }))
  }
}

export const deleteTask = (taskId: string, columnId: string, tagIds: string[] = []) => {
  return (dispatch: AppDispatch) => {
    dispatch(taskActions.removeTask(taskId))
    dispatch(columnActions.popItem({ itemId: taskId, columnId }))
    dispatch(tagActions.popItems({ itemId: taskId, tagIds }))
  }
}
