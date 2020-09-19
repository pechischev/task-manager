import { useCallback, useContext, useState } from 'react'
import { useSelector } from 'react-redux'

import { createTask, updateTask, deleteTask } from '../../../states/handlers'
import { useAppDispatch } from '../../../states/store'
import { getTaskById } from '../../../states/selectors'
import { TaskFormDto } from '../../../states/interfaces'

import { SlidePanelsContext } from '../../panel'

export type FormInputDataType = {
  columnId: string
  taskId?: string
}

export const useTaskForm = ({ columnId, taskId = undefined }: FormInputDataType) => {
  const { closePanel } = useContext(SlidePanelsContext)

  const task = useSelector(getTaskById(taskId as string)) as Partial<TaskFormDto>

  const [formData, setFormData] = useState<Partial<TaskFormDto>>({ columnId, ...task })
  const dispatch = useAppDispatch()

  const clearForm = useCallback(() => {
    closePanel('task-form')
    setFormData({})
  }, [closePanel])

  const handleChange = useCallback(
    (field: string, value: string | string[]) => {
      setFormData({
        ...formData,
        [field]: value,
      })
    },
    [formData],
  )

  const handleDelete = useCallback(() => {
    const { id, columnId, tags } = formData
    if (!id) {
      throw new Error("Don't remove new task")
    }
    const action = deleteTask(id, columnId as string, tags)
    action(dispatch)

    clearForm()
  }, [dispatch, formData, clearForm])

  const handleSubmit = useCallback(() => {
    const { id, ...rest } = formData as TaskFormDto
    const action = id ? updateTask(id, rest) : createTask(rest)
    action(dispatch)

    clearForm()
  }, [dispatch, formData, clearForm])

  return {
    formData,
    handleChange,
    handleSubmit,
    handleDelete,
  }
}
