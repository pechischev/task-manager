import { useCallback, useState } from 'react'

import { TaskDto } from '../states/task'
import { createTask, updateTask } from '../states/handlers'
import { useAppDispatch } from '../states/store'

type Form = {
  columnId?: string
  dto?: TaskDto
}

export const useTasks = () => {
  const [showPanel, setShowPanel] = useState(false)
  const [formData, setFormData] = useState<Form>({})
  const dispatch = useAppDispatch()

  const closePanel = useCallback(() => setShowPanel(false), [])

  const handleChangeTask = useCallback((columnId: string, dto?: TaskDto) => {
    setFormData({ columnId, dto })
    setShowPanel(true)
  }, [])

  const handleSubmitTask = useCallback(
    (dto) => {
      const { id, ...rest } = dto
      const action = dto.id ? updateTask(id, rest) : createTask(rest, formData.columnId as string)
      action(dispatch)

      closePanel()
      setFormData({})
    },
    [dispatch, formData.columnId],
  )

  return {
    taskDto: formData.dto,
    formData,
    showPanel,
    closePanel,
    handleChangeTask,
    handleSubmitTask,
  }
}
