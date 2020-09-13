import React, { FC, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { Field } from '../../../components/Field'

import { AppState, useAppDispatch } from '../../../states/store'
import { Tag, tagActions } from '../../../states/tag'

type TagFieldProps = {
  tag: Tag
}

const TagField: FC<TagFieldProps> = ({ tag }) => {
  const [value, setValue] = useState(tag.title)
  const dispatch = useAppDispatch()
  const handleChange = useCallback((_, value: string) => setValue(value), [tag])
  const handleSave = useCallback(() => dispatch(tagActions.editTag({ id: tag.id, title: value })), [tag, value])
  const handleRemove = useCallback(() => dispatch(tagActions.removeTag(tag.id)), [tag.id])

  const isEditing = tag.title !== value

  return (
    <div>
      <Field type="text" value={value} onChange={handleChange} />
      <button onClick={handleSave} disabled={!isEditing}>
        Save
      </button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

const AddTagField: FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()

  const handleChange = useCallback((_, value: string) => setValue(value), [])
  // TODO: generate id is temporary solution before saving on server
  const handleAppend = useCallback(() => {
    dispatch(tagActions.addTag({ id: uuidv4(), title: value, items: [] }))
    setValue('')
  }, [value])

  return (
    <div>
      <Field type="text" value={value} onChange={handleChange} />
      <button onClick={handleAppend} disabled={!value}>
        Append
      </button>
    </div>
  )
}

export const TagsForm: FC = () => {
  const items = useSelector((state: AppState) => state.tags.items)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((tag) => (
        <TagField tag={tag} key={tag.id} />
      ))}
      <AddTagField />
    </div>
  )
}
