import { createSelector } from '@reduxjs/toolkit'

import { AppState } from './store'
import { Task } from './task'
import { Tag } from './tag'

export const getGroupedTasks = createSelector(
  (state: AppState) => state.tasks,
  (state: AppState) => state.columns,
  (tasks, columns) =>
    columns.map((column) => ({
      column,
      columnTasks: tasks.filter((task) => column.items.includes(task.id)),
    })),
)

export const getFilteringTasksByTag = (tasks: Task[], tag?: Tag): Task[] =>
  tasks.filter((task) => (tag ? tag.items.includes(task.id) : true))
