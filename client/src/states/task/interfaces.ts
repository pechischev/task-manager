export interface Task {
  id: string;
  title: string;
  description: string;
  due_date: string;
}

export type TaskDto = Omit<Task, 'id'> & {id?: string};
