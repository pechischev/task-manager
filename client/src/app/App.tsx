import React from 'react'

import { Layout } from '../components/Layout/Layout'

import { Content } from './Content'
import { SlidePanelsProvider } from './panel'

import { useInitApp } from './useInitApp'

export const App: React.FunctionComponent = () => {
  // TODO: temporary solution before saving on server
  useInitApp()

  return (
    <SlidePanelsProvider>
      <Layout>
        <Content />
      </Layout>
    </SlidePanelsProvider>
  )
}
