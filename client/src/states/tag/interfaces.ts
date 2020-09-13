export interface Tag {
  id: string
  title: string
  color?: string
  items: string[]
}

export type TagData = {
  itemId: string
  tagId: string
}

export type TagDto = Pick<Tag, 'id' | 'title' | 'color'>
