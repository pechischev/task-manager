export interface ITask {
  id: string;
  title: string;
  description: string;
  due_date: string;
}

export type TaskDto = Omit<ITask, 'id'>;
