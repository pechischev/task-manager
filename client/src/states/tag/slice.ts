import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tag, TagData, TagDto } from './interfaces'

type TagsState = {
  items: Tag[]
  selectedTags?: string[]
}

const initialState: TagsState = {
  // stub data
  items: [
    { id: '1', title: 'Home', items: ['1', '2'] },
    { id: '2', title: 'Work', items: ['1', '3', '4'] },
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
    pushItems(state, action: PayloadAction<TagData>) {
      const { itemId, tagIds } = action.payload
      tagIds.forEach((tagId) => {
        const tag = state.items.find((item) => item.id === tagId)
        if (tag && !tagId.includes(itemId)) {
          tag.items.push(itemId)
        }
      })
    },
    popItems(state, action: PayloadAction<TagData>) {
      const { itemId, tagIds } = action.payload
      tagIds.forEach((tagId) => {
        const tag = state.items.find((item) => item.id === tagId)
        if (tag) {
          tag.items = tag.items.filter((item) => item !== itemId)
        }
      })
    },
  },
})
