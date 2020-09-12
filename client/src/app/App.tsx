import React from 'react'
import { useSelector } from 'react-redux'

import { Layout } from '../components/Layout/Layout'
import { AddTask } from '../components/AddTask/AddTask'
import { Column as ColumnComponent } from '../components/Column'
import { TaskCard } from '../components/TaskCard'
import { TaskForm } from './forms/TaskForm'

import { SlidePanel, SlidePanelsProvider } from './panel'

import { getFilteringTasksByTag, getGroupedTasks } from '../states/selectors'

import { useInitApp } from './useInitApp'
import { useTasks } from './useTasks'

export const App: React.FunctionComponent = () => {
  useInitApp()

  const { taskDto, handleChangeTask, handleSubmitTask } = useTasks()
  const groupedTask = useSelector(getGroupedTasks)

  const columnList = groupedTask.map(({ column, columnTasks }) => (
    <ColumnComponent key={column.id} title={column.title}>
      {getFilteringTasksByTag(columnTasks).map((task) => (
        <TaskCard key={task.id} title={task.title} onClick={() => handleChangeTask(column.id, task)} />
      ))}
      <AddTask onClick={() => handleChangeTask(column.id)} />
    </ColumnComponent>
  ))

  return (
    <SlidePanelsProvider>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {columnList}
          <SlidePanel name="task-form">
            <TaskForm data={taskDto} onSubmit={handleSubmitTask} />
          </SlidePanel>
        </div>
      </Layout>
    </SlidePanelsProvider>
  )
}
