import React, { FunctionComponent } from 'react';

export type TaskCardProps = {
  title: string;

  onClick(): void;
}

const TaskCard: FunctionComponent<TaskCardProps> = ({ title, ...rest }) => (
  <div className="task-card" {...rest}>
    <div className="task-card__title">{title}</div>
  </div>
);

export {TaskCard};
