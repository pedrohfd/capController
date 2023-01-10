import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface StoriesProps {
  name: string
  link: string
  cap: number
}

interface CapStore {
  stories: StoriesProps[]
  addStorie: (story: StoriesProps) => void
  addCap: () => void
  removeCap: () => void
  showStories: () => void
}

export const useCapStore = create<CapStore>()(
  persist(
    (set, get) => ({
      stories: [],
      addStorie: story =>
        set(state => ({ stories: [...state.stories, story] })),
      addCap: () => {},
      removeCap: () => {},
      showStories: () => console.log(get().stories),
    }),
    {
      name: 'cap-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
