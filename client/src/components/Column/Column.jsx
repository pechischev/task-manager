import React from 'react';

import {propTypes} from './propTypes.js';

const Column = ({children, title, onAppend, onChangeTitle, ...rest}) => (
  <div className="column" {...rest}>
    <div className="column__title">
      {title}
    </div>
    <div className="column__items">
      {React.Children.map(children, (child) => React.cloneElement(child, {className: 'column__item'}))}
    </div>
  </div>
);

Column.propTypes = propTypes;

export {Column};
