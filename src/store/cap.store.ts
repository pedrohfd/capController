import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface StoriesProps {
  name: string
  link: string
  cap: number
  read: boolean
}

interface CapStore {
  stories: StoriesProps[]
  addStory: (story: StoriesProps) => void
  addCap: (index: number) => void
  removeCap: (index: number) => void
  removeStory: (index: number) => void
  readStory: (index: number) => void
}

export const useCapStore = create<CapStore>()(
  persist(
    (set, get) => ({
      stories: [],
      addStory: story => set(state => ({ stories: [...state.stories, story] })),
      addCap: index => {
        const stories = get().stories

        const newStories = stories.map(item => {
          if (item === stories[index]) {
            return { ...item, cap: item.cap + 1 }
          }

          return item
        })

        set({ stories: newStories })
      },
      removeCap: index => {
        const stories = get().stories

        const newStories = stories.map(item => {
          if (item === stories[index]) {
            if (item.cap === 0) return item
            return { ...item, cap: item.cap - 1 }
          }

          return item
        })

        set({ stories: newStories })
      },
      removeStory: index => {
        const stories = get().stories

        const newStories = stories.filter(item => item !== stories[index])

        set({ stories: newStories })
      },
      readStory: index => {
        const stories = get().stories

        const newStories = stories.map(item => {
          if (item === stories[index]) {
            return { ...item, read: !item.read }
          }

          return item
        })

        set({ stories: newStories })
      },
    }),
    {
      name: 'cap-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
