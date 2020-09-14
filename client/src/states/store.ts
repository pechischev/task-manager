import { createLoguxCreator } from '@logux/redux'
import { badge, badgeEn, log } from '@logux/client'
import { badgeStyles } from '@logux/client/badge/styles'

import reducers from './reducers'

const createStore = createLoguxCreator({
  server: process.env.NODE_ENV === 'development' ? 'ws://localhost:31337' : 'wss://logux.example.com',
  subprotocol: '1.0.0',
  userId: 'todo', // TODO: We will fill it in Authentication recipe
  token: '', // TODO: We will fill it in Authentication recipe
})

const store = createStore(reducers)
badge(store.client, { messages: badgeEn, styles: badgeStyles })
log(store.client)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => store.dispatch

export default store
