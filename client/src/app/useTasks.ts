import { useCallback, useContext, useState } from 'react'

import { TaskDto } from '../states/task'
import { createTask, updateTask } from '../states/handlers'
import { useAppDispatch } from '../states/store'

import { SlidePanelsContext } from './panel'

type Form = {
  columnId?: string
  dto?: TaskDto
}

/*
  1. Перенести в таск форм
  2. сделать селектор, который получает значение формы по id (task + tags)
  3. зарефакторить хук и форму
  4. поправить экшены по CRUD тасковв handlers
 */
export const useTasks = () => {
  const { closePanel, openPanel } = useContext(SlidePanelsContext)
  const [formData, setFormData] = useState<Form>({})
  const dispatch = useAppDispatch()

  const handleChangeTask = useCallback(
    (columnId: string, dto?: TaskDto) => {
      setFormData({ columnId, dto })
      openPanel('task-form')
    },
    [openPanel],
  )

  const handleSubmitTask = useCallback(
    (dto) => {
      const { id, ...rest } = dto
      const action = dto.id ? updateTask(id, rest) : createTask(rest, formData.columnId as string)
      action(dispatch)

      closePanel('task-form')
      setFormData({})
    },
    [dispatch, formData.columnId, closePanel],
  )

  return {
    taskDto: formData.dto,
    formData,
    handleChangeTask,
    handleSubmitTask,
  }
}
