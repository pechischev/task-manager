import React, { FC } from 'react'

import { Layout } from '../components/Layout/Layout'

import { Header } from './Header'
import { Content } from './Content'
import { SlidePanelsProvider } from './panel'

export const App: FC = () => (
  <SlidePanelsProvider>
    <Layout>
      <Header />
      <Content />
    </Layout>
  </SlidePanelsProvider>
)
