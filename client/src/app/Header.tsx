import React, { FC, useCallback, useContext, useMemo } from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'

import { tagActions } from '../states/tag'
import { AppState, useAppDispatch } from '../states/store'

import { SlidePanelsContext } from './panel'

export const Header: FC = () => {
  const items = useSelector((state: AppState) => state.tags.items)
  const { openPanel } = useContext(SlidePanelsContext)
  const dispatch = useAppDispatch()

  const options = useMemo(
    () =>
      items.map((item) => ({
        value: item.id,
        label: item.title,
      })),
    [items],
  )

  const handleChange = useCallback((selectedOption) => dispatch(tagActions.selectTags(selectedOption)), [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: 300 }}>
        <Select options={options} onChange={handleChange} isMulti isSearchable isDisabled={!items.length} />
      </div>
      <button onClick={() => openPanel('tags-form')}>Change labels</button>
    </div>
  )
}
