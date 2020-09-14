import { TaskDto } from './task'

export type TaskFormDto = TaskDto & { tags: string[] }
