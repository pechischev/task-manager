export interface Column {
  id: string
  title: string
  items: string[]
}

export type ColumnData = {
  itemId: string
  columnId: string
}
export type ColumnMoveData = {
  itemId: string
  source: string
  target: string
  position: number
}
