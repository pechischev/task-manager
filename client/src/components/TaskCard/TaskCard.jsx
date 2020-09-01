import React from 'react';

import {propTypes} from './propTypes.js';

const TaskCard = ({ title, onChange, ...rest }) => (
  <div className="task-card" {...rest}>
    <div className="task-card__title">{title}</div>
  </div>
);

TaskCard.propTypes = propTypes;

export {TaskCard};
