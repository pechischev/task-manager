import { HTMLAttributes, ReactElement } from 'react'

export interface IColumnProps extends HTMLAttributes<Element> {
  children: ReactElement[]
  title: string
  onAppend: () => void
  onChangeTitle: () => void
}
