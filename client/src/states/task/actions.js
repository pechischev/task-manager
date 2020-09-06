import * as actionTypes from './types.js';

const addTask = ({ id, title, description, due_date }) => ({
  type: actionTypes.ADD_TASK,
  task: {id, title, description, due_date},
});

const editTask = (id, {title, description, due_date}) => ({
  type: actionTypes.EDIT_TASK,
  task: {id, title, description, due_date}
});

const removeTask = (id) => ({
  type: actionTypes.REMOVE_TASK,
  task_id: id
});

export { addTask, editTask, removeTask };
