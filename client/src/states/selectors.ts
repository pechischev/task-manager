import {AppState} from './store';

export const getTasksByColumn = (state: AppState, column_id: string) => {
  const { columns, tasks } = state;

  const column = columns.find((column) => column.id === column_id);
  if (!column) {
    return []
  }
  return tasks.filter((task) => column.items.includes(task.id));
};
