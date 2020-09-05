import React, {ReactElement} from 'react';

import {IColumnProps} from './IColumnProps';

const Column: React.FunctionComponent<IColumnProps> = ({children, title, onAppend, onChangeTitle, ...rest}) => (
  <div className="column" {...rest}>
    <div className="column__title">
      {title}
    </div>
    <div className="column__items">
      {React.Children.map(children, (child: ReactElement) => React.cloneElement(child, {className: 'column__item'}))}
    </div>
  </div>
);

export {Column};
