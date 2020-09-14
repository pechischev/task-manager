import { AppState } from './store'

import { Task } from './task'

export const getTasksByColumn = (state: AppState, columnId: string): Task[] => {
  const { columns, tasks } = state

  const column = columns.find((column) => column.id === columnId)
  if (!column) {
    return []
  }
  return tasks.filter((task) => column.items.includes(task.id))
}
