import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {Layout} from '../components/Layout/Layout';
import {AddTask} from '../components/AddTask/AddTask';
import {Column} from '../components/Column';

import {TaskForm} from './forms/TaskForm';

const emptyForm = {isOpen: false, column: null}

export const App: React.FunctionComponent = () => {
  const [formData, setFormData] = useState(emptyForm)
  const columns = useSelector((state: any) => state.columns)
  const columnList = columns.map((column: any) => (
    <Column
      key={column.id}
      title={column.title}
      onAppend={() => {
      }}
      onChangeTitle={() => {
      }}
    >
      <AddTask onClick={() => {
        setFormData({isOpen: true, column: column.id});
      }}/>
    </Column>
  ))

  return (
    <Layout>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {columnList}
        {formData.isOpen && (
          <div>
            <span onClick={() => setFormData(emptyForm)}>X</span>
            <TaskForm onSubmit={(data) => console.log(data)}/>
          </div>
        )}
      </div>
    </Layout>
  )
}
