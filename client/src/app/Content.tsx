import React, { FC, useCallback, useContext, useState } from 'react'
import { useSelector } from 'react-redux'

import { Column as ColumnComponent } from '../components/Column'
import { TaskCard } from '../components/TaskCard'
import { AddTask } from '../components/AddTask/AddTask'

import { SlidePanel, SlidePanelsContext } from './panel'
import { FormInputDataType, TaskForm } from './forms/TaskForm'
import { TagsForm } from './forms/TagsForm'

import { getFilteringTasksByTag, getGroupedTasks } from '../states/selectors'

type SelectedItemType = FormInputDataType

export const Content: FC = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>()

  const { openPanel } = useContext(SlidePanelsContext)

  const handleTaskClick = useCallback(
    (columnId: string, taskId = undefined) => {
      setSelectedItem({ columnId, taskId })
      openPanel('task-form')
    },
    [openPanel, setSelectedItem],
  )

  const groupedTask = useSelector(getGroupedTasks)

  const columnList = groupedTask.map(({ column, columnTasks }) => (
    <ColumnComponent key={column.id} title={column.title}>
      {getFilteringTasksByTag(columnTasks).map((task) => (
        <TaskCard key={task.id} title={task.title} onClick={() => handleTaskClick(column.id, task.id)} />
      ))}
      <AddTask onClick={() => handleTaskClick(column.id)} />
    </ColumnComponent>
  ))

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {columnList}
      {!!selectedItem && (
        <SlidePanel name="task-form">
          <TaskForm data={selectedItem} />
        </SlidePanel>
      )}
      <SlidePanel name="tags-form">
        <TagsForm />
      </SlidePanel>
    </div>
  )
}
