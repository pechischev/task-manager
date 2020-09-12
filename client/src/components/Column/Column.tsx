import React, { FC } from 'react'

type ColumnProps = {
  title: string;
  onAppend?: () => void;
  onChangeTitle?: () => void;
}

const Column: FC<ColumnProps> = ({ children, title, onAppend, onChangeTitle}) => (
  <div className="column">
    <div className="column__title">{title}</div>
    <div className="column__items">
      {children}
    </div>
  </div>
)

export { Column }
