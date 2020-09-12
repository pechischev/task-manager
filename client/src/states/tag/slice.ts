import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tag, TagData } from './interfaces'

export const tagSlice = createSlice({
  name: 'tags',
  initialState: [] as Tag[],
  reducers: {
    addTag(state, action: PayloadAction<Tag>) {
      state.push(action.payload)
    },
    editTag(state, action: PayloadAction<Tag>) {
      const newTag = action.payload
      const tag = state.find((item) => item.id === newTag.id)
      if (tag) {
        tag.title = newTag.title
        tag.color = newTag.color
      }
    },
    removeTag(state, action: PayloadAction<string>) {
      const tagId = action.payload
      state = state.filter((item) => item.id === tagId)
    },
    pushItem(state, action: PayloadAction<TagData>) {
      const { itemId, tagId } = action.payload
      const tag = state.find((item) => item.id === tagId)
      if (tag) {
        tag.items.push(itemId)
      }
    },
    popItem(state, action: PayloadAction<TagData>) {
      const { itemId, tagId } = action.payload
      const tag = state.find((item) => item.id === tagId)
      if (tag) {
        tag.items = tag.items.filter((item) => item !== itemId)
      }
    },
  },
})
