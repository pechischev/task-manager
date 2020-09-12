import { taskSlice } from './slice'

const { actions, reducer } = taskSlice

export * from './interfaces'
export { actions as taskActions }
export default reducer
