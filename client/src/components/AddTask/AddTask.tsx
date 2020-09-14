import React, { FC } from 'react'

import './AddTask.css'

type AddTaskProps = {
  onClick: () => void
}

export const AddTask: FC<AddTaskProps> = (props) => (
  <button className="add-task" {...props}>
    + Add task
  </button>
)
