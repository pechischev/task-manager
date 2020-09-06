import { v4 as uuidv4 } from 'uuid'
import * as actionTypes from './types';

const addColumn = ({ title }) => ({
  type: actionTypes.addColumn,
  column: {id: uuidv4(), title},
});

const editColumn = (id, {title}) => ({
  type: actionTypes.editColumn,
  column: {id, title},
});

const removeColumn = (id) => ({
  type: actionTypes.removeColumn,
  column_id: id,
});

const pushColumnItem = (task_id, column_id) => ({
  type: actionTypes.pushColumnItem,
  push_data: {
    item_id: task_id,
    column_id,
  }
})

const moveColumnItem = (task_id, {source_column_id, target_column_id, position }) => ({
  type: actionTypes.moveColumnItem,
  move_data: {
    item_id: task_id,
    source: source_column_id,
    target: target_column_id,
    position,
  },
});

const popColumnItem = (task_id, column_id) => ({
  type: actionTypes.popColumnItem,
  pop_data: {
    item_id: task_id,
    column_id,
  },
});

export { addColumn, editColumn, removeColumn, moveColumnItem, pushColumnItem, popColumnItem };
