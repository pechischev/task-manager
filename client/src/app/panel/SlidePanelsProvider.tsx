import React, { FC, useCallback, useState } from 'react'

type SlidePanelsContextType = {
  isOpen: (name: string) => boolean
  openPanel: (name: string) => void
  closePanel: (name: string) => void
}

export const SlidePanelsContext = React.createContext<SlidePanelsContextType>({
  isOpen: () => false,
  openPanel: () => undefined,
  closePanel: () => undefined,
})

type Panel = { [key: string]: boolean }

export const SlidePanelsProvider: FC = ({ children }) => {
  const [panelsData, setPanelsData] = useState<Panel>({})

  const openPanel = useCallback((panelName: string) => setPanelsData({ [panelName]: true }), [])
  const closePanel = useCallback((panelName: string) => setPanelsData({ [panelName]: false }), [])
  const isOpen = useCallback((panelName: string) => panelsData[panelName], [panelsData])

  return (
    <SlidePanelsContext.Provider
      value={{
        openPanel,
        closePanel,
        isOpen,
      }}
    >
      {children}
    </SlidePanelsContext.Provider>
  )
}
