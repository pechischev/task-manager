import React, { FC, useCallback, useState } from 'react'

import { Field } from '../../../components/Field'

import { TaskDto } from '../../../states/task'

type TaskFormProps = {
  data?: TaskDto

  onSubmit: (data: TaskDto) => void
}

const TaskForm: FC<TaskFormProps> = ({ data = {}, onSubmit: handleSubmit }) => {
  const [formData, setFormData] = useState(data as TaskDto)

  const onChange = useCallback(
    (field: string, value: string) => {
      setFormData({
        ...formData,
        [field]: value,
      })
    },
    [formData],
  )

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault()

      if (handleSubmit) {
        handleSubmit(formData)
      }
    },
    [handleSubmit, formData],
  )

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <Field
        type="text"
        label="Title"
        required
        onChange={(_, value) => onChange('title', value)}
        value={formData?.title}
      />
      <Field
        type="textarea"
        label="Description"
        onChange={(_, value) => onChange('description', value)}
        value={formData?.description}
      />
      <Field
        type="date"
        label="Due date"
        onChange={(_, value) => onChange('dueDate', value)}
        value={formData?.dueDate}
      />
      <button type="submit" onClick={onSubmit}>
        Save
      </button>
    </form>
  )
}

export { TaskForm }
