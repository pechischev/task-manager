import * as actionTypes from './types.js'

const initialItems = []

const reducer = (items = initialItems, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      return [...items, action.task]
    }
    case actionTypes.EDIT_TASK: {
      const newTask = action.task
      const taskIndex = items.findIndex((item) => item.id === newTask.id)
      items.splice(taskIndex, 1, { ...items[taskIndex], ...newTask })
      return [...items]
    }
    case actionTypes.REMOVE_TASK: {
      return items.filter((item) => item.id === action.task_id)
    }
    default:
      return items
  }
}

export { reducer }
