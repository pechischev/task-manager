export interface Task {
  id: string
  title: string
  description: string
  dueDate: string
}

export type TaskDto = Omit<Task, 'id'> & { id?: string }
