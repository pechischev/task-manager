import * as actionTypes from './types.js';

const initialItems = [
  {
    id: 1,
    title: 'Planned',
  },
  {
    id: 2,
    title: 'Today',
  },
];

const reducer = (items = initialItems, action) => {
  switch (action.type) {
    case actionTypes.addColumn: {
      return [...items, { ...action.column, items: []}];
    }
    case actionTypes.editColumn: {
      const newColumn = action.column;
      const columnIndex = items.findIndex((item) => item.id === newColumn.id);
      items.splice(columnIndex, 1, {...items[columnIndex], ...newColumn});
      return [...items];
    }
    case actionTypes.removeColumn: {
      return items.filter((item) => item.id === action.column_id);
    }
    case actionTypes.pushColumnItem: {
      const {item_id, column_id} = action.push_data;
      const newItems = [...items];

      const column = newItems.find((item) => item.id === column_id);
      if (column) {
        column.items.push(item_id);
      }

      return newItems;
    }
    case actionTypes.moveColumnItem: {
      const {item_id, source, target, position} = action.move_data;
      const newItems = [...items];
      const sourceColumn = newItems.find((item) => item.id === source);
      const targetColumn = newItems.find((item) => item.id === target);

      if (sourceColumn && targetColumn) {
        sourceColumn.items = sourceColumn.items.filter((item) => item === item_id);
        targetColumn.items.splice(position || targetColumn.items.length, 0, item_id);
      }

      return newItems;
    }
    default:
      return items;
  }
}

export {reducer};
