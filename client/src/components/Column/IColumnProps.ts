import {HTMLAttributes} from 'react';

export interface IColumnProps extends HTMLAttributes<Element> {
  title: string;
  onAppend: () => void;
  onChangeTitle: () => void;
}
