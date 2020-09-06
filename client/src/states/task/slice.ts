import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITask} from './interfaces';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as ITask[],
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.push(action.payload);
    },
    editTask(state, action: PayloadAction<ITask>) {
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
