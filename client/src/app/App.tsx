import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Layout } from '../components/Layout/Layout'
import { AddTask } from '../components/AddTask/AddTask'
import { Column as ColumnComponent } from '../components/Column'
import { TaskCard } from '../components/TaskCard'
import { TaskForm } from './forms/TaskForm'

import { AppState } from '../states/store'
import { Column } from '../states/column'
import { getTasksByColumn } from '../states/selectors'

import { useInitApp } from './useInitApp'
import { useTasks } from './useTasks'

export const App: FC = () => {
  useInitApp()

  const { showPanel, taskDto, closePanel, handleChangeTask, handleSubmitTask } = useTasks()
  const state = useSelector((state: AppState) => state)
  const { columns } = state

  const columnList = columns.map((column: Column) => (
    <ColumnComponent key={column.id} title={column.title}>
      {getTasksByColumn(state, column.id).map((task) => (
        <TaskCard key={task.id} title={task.title} onClick={() => handleChangeTask(column.id, task)} />
      ))}
      <AddTask onClick={() => handleChangeTask(column.id)} />
    </ColumnComponent>
  ))

  return (
    <Layout>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {columnList}
        {showPanel && (
          <div>
            <span onClick={closePanel}>X</span>
            <TaskForm data={taskDto} onSubmit={handleSubmitTask} />
          </div>
        )}
      </div>
    </Layout>
  )
}
