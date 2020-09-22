import React, { FC, useContext } from 'react'

import { SlidePanelsContext } from './SlidePanelsProvider'

type SlidePanelProps = {
  name: string
}

export const SlidePanel: FC<SlidePanelProps> = ({ children, name }) => {
  const { isOpen, closePanel } = useContext(SlidePanelsContext)

  if (!isOpen(name)) {
    return null
  }

  return (
    <div className="slide-panel">
      <span className="slide-panel__close" onClick={() => closePanel(name)}>
        X
      </span>
      {children}
    </div>
  )
}
