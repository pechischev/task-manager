import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task} from './interfaces';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.push(action.payload);
    },
    editTask(state, action: PayloadAction<Task>) {
      const newTask = action.payload;
      const task = state.find((item) => item.id === newTask.id);
      if (task) {
        // TODO: need refactoring
        task.title = newTask.title;
        task.description = newTask.description;
        task.due_date = newTask.due_date;
      }
    },
    removeTask(state, action: PayloadAction<string>) {
      const task_id = action.payload;
      state = state.filter((item) => item.id !== task_id);
    }
  }
});
