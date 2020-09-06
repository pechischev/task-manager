import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';

import {Layout} from '../components/Layout/Layout';
import {AddTask} from '../components/AddTask/AddTask';
import {Column} from '../components/Column';

import {TaskForm} from './forms/TaskForm';
import {AppState, useAppDispatch} from '../states/store';
import {IColumn} from '../states/column';

import {useInitApp} from './useInitApp';
import {getTasksByColumn} from '../states/selectors';
import {TaskCard} from '../components/TaskCard';
import {createTask} from '../states/handlers';
import {TaskDto} from '../states/task';

type Form = {is_open: boolean, column?: string}

export const App: React.FunctionComponent = () => {
  useInitApp();

  const [formData, setFormData] = useState<Form>({is_open: false});
  const state = useSelector((state: AppState) => state);
  const dispatch = useAppDispatch();
  const {columns} = state;

  const handleClose = useCallback(() => {
    setFormData({is_open: false})
  }, [])

  const onAddTask = useCallback((dto) => {
    const actionCreator = createTask(dto as TaskDto, formData.column as string);
    actionCreator(dispatch)
    handleClose()
  }, [formData]);

  const columnList = columns.map((column: IColumn) => (
    <Column
      key={column.id}
      title={column.title}
      onAppend={() => {
      }}
      onChangeTitle={() => {
      }}
    >
      {getTasksByColumn(state, column.id).map((task) => (
        <TaskCard title={task.title} onChange={() => void 0} />
      ))}
      <AddTask onClick={() => {
        setFormData({is_open: true, column: column.id});
      }}/>
    </Column>
  ));

  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {columnList}
        {formData.is_open && (
          <div>
            <span onClick={handleClose}>X</span>
            <TaskForm onSubmit={onAddTask}/>
          </div>
        )}
      </div>
    </Layout>
  );
};
