import React, {FC, useCallback, useState} from 'react';

import {ITaskFormProps} from './ITaskFormProps';

const TaskForm: FC<ITaskFormProps> = ({ data= {}, onSubmit: handleSubmit }) => {
  const [formData, setFormData] = useState(data)

  const onChange = useCallback((field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }, [formData])

  const onSubmit = useCallback((event) => {
    event.preventDefault()

    if (handleSubmit) {
      handleSubmit(formData);
    }
  }, [handleSubmit, formData])

  return (
    <form style={{ display: 'flex', flexDirection: 'column'}}>
      <label>
        <span>Title</span>
        <input required type="text" onChange={(event) => onChange('title', event.target.value)}/>
      </label>

      <label>
        <span>Description</span>
        <textarea onChange={(event) => onChange('description', event.target.value)}/>
      </label>

      <label>
        <span>Due date</span>
        <input type="date" onChange={(event) => onChange('due_date', event.target.value)}/>
      </label>

      <button type="submit" onClick={onSubmit}>
        Save
      </button>

    </form>
  )
}

export {TaskForm}
