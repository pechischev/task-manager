import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ColumnData, ColumnMoveData, IColumn} from './interfaces';

export const columnSlice = createSlice({
  name: 'columns',
  initialState: [] as IColumn[],
  reducers: {
    addColumn(state, action: PayloadAction<IColumn>) {
      state.push(action.payload);
    },
    editColumn(state, action: PayloadAction<IColumn>) {
      const newColumn = action.payload;
      const column = state.find((item) => item.id === newColumn.id);
      if (column) {
        column.title = newColumn.title;
      }
    },
    removeColumn(state, action: PayloadAction<string>) {
      const column_id = action.payload;
      state = state.filter((item) => item.id === column_id);
    },
    pushItem(state, action: PayloadAction<ColumnData>) {
      const {item_id, column_id} = action.payload;
      const column = state.find((item) => item.id === column_id);
      if (column) {
        column.items.push(item_id);
      }
    },
    popItem(state, action: PayloadAction<ColumnData>) {
      const {item_id, column_id} = action.payload;
      const column = state.find((item) => item.id === column_id);
      if (column) {
        column.items = column.items.filter((item) => item !== item_id);
      }
    },
    moveItem(state, action: PayloadAction<ColumnMoveData>) {
      const {item_id, source, target, position} = action.payload;
      const sourceColumn = state.find((item) => item.id === source);
      const targetColumn = state.find((item) => item.id === target);

      if (sourceColumn && targetColumn) {
        sourceColumn.items = sourceColumn.items.filter((item) => item !== item_id);
        targetColumn.items.splice(position || targetColumn.items.length, 0, item_id);
      }
    },
  }
});
