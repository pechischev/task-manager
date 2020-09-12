import React, { FC } from 'react'

export type TaskCardProps = {
  title: string

  onClick: () => void
}

const TaskCard: FC<TaskCardProps> = ({ title, ...rest }) => (
  <div className="task-card" {...rest}>
    <div className="task-card__title">{title}</div>
  </div>
)

export { TaskCard }
