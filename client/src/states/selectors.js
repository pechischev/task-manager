export const getTasksByColumn = (state, columnId) => {
  const { columns, tasks } = state;

  const column = columns.find((column) => column.id === columnId);
  if (!column) {
    return []
  }
  return tasks.filter((task) => column.items.includes(task.id));
};
