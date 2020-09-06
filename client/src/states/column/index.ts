import {columnSlice} from './slice';

const {actions, reducer } = columnSlice;

export * from './interfaces';
export {actions as columnActions};
export default reducer;
