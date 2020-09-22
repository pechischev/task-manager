import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ColumnData, ColumnMoveData, Column } from './interfaces'

export const columnSlice = createSlice({
  name: 'columns',
  // stub data
  initialState: [
    {
      id: '1',
      title: 'Planned',
      items: ['2', '3', '4'],
    },
    {
      id: '2',
      title: 'In progress',
      items: ['1'],
    },
  ] as Column[],
  reducers: {
    addColumn(state, action: PayloadAction<Column>) {
      state.push(action.payload)
    },
    editColumn(state, action: PayloadAction<Column>) {
      const newColumn = action.payload
      const column = state.find((item) => item.id === newColumn.id)
      if (column) {
        column.title = newColumn.title
      }
    },
    removeColumn(state, action: PayloadAction<string>) {
      const columnId = action.payload
      state = state.filter((item) => item.id !== columnId)
    },
    pushItem(state, action: PayloadAction<ColumnData>) {
      const { itemId, columnId } = action.payload
      const column = state.find((item) => item.id === columnId)
      if (column) {
        column.items.push(itemId)
      }
    },
    popItem(state, action: PayloadAction<ColumnData>) {
      const { itemId, columnId } = action.payload
      const column = state.find((item) => item.id === columnId)
      if (column) {
        column.items = column.items.filter((item) => item !== itemId)
      }
    },
    moveItem(state, action: PayloadAction<ColumnMoveData>) {
      const { itemId, source, target, position } = action.payload
      const sourceColumn = state.find((item) => item.id === source)
      const targetColumn = state.find((item) => item.id === target)

      if (sourceColumn && targetColumn) {
        sourceColumn.items = sourceColumn.items.filter((item) => item !== itemId)
        targetColumn.items.splice(position || targetColumn.items.length, 0, itemId)
      }
    },
  },
})
