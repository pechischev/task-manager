import React, {HTMLAttributes} from 'react';

import './AddTask.css'

export const AddTask: React.FunctionComponent<HTMLAttributes<HTMLButtonElement>> = (props) => (
  <button className="add-task" {...props}>
    + Add task
  </button>
)
