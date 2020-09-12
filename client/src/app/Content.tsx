import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Column as ColumnComponent } from '../components/Column'
import { TaskCard } from '../components/TaskCard'
import { AddTask } from '../components/AddTask/AddTask'

import { SlidePanel } from './panel'
import { TaskForm } from './forms/TaskForm'

import { getFilteringTasksByTag, getGroupedTasks } from '../states/selectors'

import { useTasks } from './useTasks'

export const Content: FC = () => {
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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {columnList}
      <SlidePanel name="task-form">
        <TaskForm data={taskDto} onSubmit={handleSubmitTask} />
      </SlidePanel>
    </div>
  )
}
