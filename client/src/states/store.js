import { createLoguxCreator } from '@logux/redux'
import { badge, badgeEn, log } from '@logux/client'
import { badgeStyles } from '@logux/client/badge/styles'

import reducers from './reducers'

const getStore = (config = {}) => {
  const createStore = createLoguxCreator({
    ...config,
    subprotocol: '1.0.0',
    userId: 'todo', // TODO: We will fill it in Authentication recipe
    token: '', // TODO: We will fill it in Authentication recipe
  })

  const store = createStore(reducers)
  badge(store.client, { messages: badgeEn, styles: badgeStyles })
  log(store.client)

  return store
}

export { getStore }
