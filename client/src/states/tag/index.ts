import { tagSlice } from './slice'

const { actions, reducer } = tagSlice

export * from './interfaces'
export { actions as tagActions }
export default reducer
