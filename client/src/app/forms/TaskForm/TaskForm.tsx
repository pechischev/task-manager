import React, { FC, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'

import Select from 'react-select'
import { Field } from '../../../components/Field'

import { FormInputDataType, useTaskForm } from './useTaskForm'

import { AppState } from '../../../states/store'

type TaskFormProps = {
  data: FormInputDataType
}

const TaskForm: FC<TaskFormProps> = ({ data }) => {
  const { formData, handleSubmit, handleChange, handleDelete } = useTaskForm(data)

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault()

      handleSubmit()
    },
    [handleSubmit],
  )

  const tagsItems = useSelector((state: AppState) => state.tags.items)
  const options = useMemo(
    () =>
      tagsItems.map((item) => ({
        value: item.id,
        label: item.title,
      })),
    [tagsItems],
  )

  const handleChangeSelectField = useCallback(
    (selectedOptions: unknown) => {
      const items = Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions]

      handleChange(
        'tags',
        items.map((item) => item.value),
      )
    },
    [handleChange],
  )

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <Field
        type="text"
        label="Title"
        required
        onChange={(_, value) => handleChange('title', value)}
        value={formData?.title}
      />
      <Field
        type="textarea"
        label="Description"
        onChange={(_, value) => handleChange('description', value)}
        value={formData?.description}
      />
      <Field
        type="date"
        label="Due date"
        onChange={(_, value) => handleChange('dueDate', value)}
        value={formData?.dueDate}
      />
      <div style={{ width: 300 }}>
        <Select
          options={options}
          onChange={handleChangeSelectField}
          value={formData?.tags?.map((value) => options.find((option) => option.value === value))}
          isMulti
          isSearchable
          isDisabled={!tagsItems.length}
        />
      </div>
      <button type="submit" onClick={onSubmit}>
        Save
      </button>
      {!!data.taskId && <button onClick={handleDelete}>Remove</button>}
    </form>
  )
}

export { TaskForm }
