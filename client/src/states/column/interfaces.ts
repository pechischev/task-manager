export interface IColumn {
  id: string;
  title: string;
  items: string[];
}

export type ColumnData = {item_id: string, column_id: string};
export type ColumnMoveData = {item_id: string, source: string, target: string, position: number};
