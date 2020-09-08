import React, { FunctionComponent } from 'react'

import { ITaskCardProps } from './ITaskCardProps'

const TaskCard: FunctionComponent<ITaskCardProps> = ({ title, onChange, ...rest }) => (
  <div className="task-card" {...rest}>
    <div className="task-card__title">{title}</div>
  </div>
)

export { TaskCard }
