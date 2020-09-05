import {HTMLAttributes} from 'react';

export interface ITaskCardProps extends HTMLAttributes<Element> {
  title: string;
  onChange: () => void;
}
