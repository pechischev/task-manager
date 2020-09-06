import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {AppState, useAppDispatch} from '../states/store';
import {columnActions} from '../states/column';

export const useInitApp = () => {
  const columns = useSelector((state: AppState) => state.columns);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (columns.length === 0) {
      dispatch(columnActions.addColumn({id: uuidv4(), title: 'Planned', items: []}));
      dispatch(columnActions.addColumn({id: uuidv4(), title: 'In progress', items: []}));
    }
  }, []);
}
