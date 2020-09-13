import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tag, TagData, TagDto } from './interfaces'

type TagsState = {
  items: Tag[]
  selectedTags?: string[]
}

const initialState: TagsState = {
  // stub data
  items: [
    { id: '1', title: 'Home', items: [] },
    { id: '2', title: 'Work', items: [] },
  ],
  selectedTags: [],
}

export const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    selectTags(state, action: PayloadAction<string[]>) {
      state.selectedTags = action.payload
    },
    addTag(state, action: PayloadAction<Tag>) {
      state.items.push(action.payload)
    },
    editTag(state, action: PayloadAction<TagDto>) {
      const newTag = action.payload
      const tag = state.items.find((item) => item.id === newTag.id)
      if (tag) {
        tag.title = newTag.title ?? tag.title
        tag.color = newTag.color ?? tag.color
      }
    },
    removeTag(state, action: PayloadAction<string>) {
      const tagId = action.payload
      state.items = state.items.filter((item) => item.id !== tagId)
    },
    pushItem(state, action: PayloadAction<TagData>) {
      const { itemId, tagId } = action.payload
      const tag = state.items.find((item) => item.id === tagId)
      if (tag) {
        tag.items.push(itemId)
      }
    },
    popItem(state, action: PayloadAction<TagData>) {
      const { itemId, tagId } = action.payload
      const tag = state.items.find((item) => item.id === tagId)
      if (tag) {
        tag.items = tag.items.filter((item) => item !== itemId)
      }
    },
  },
})
