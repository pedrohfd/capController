import { useState } from 'react'
import { useCapStore } from '../../store/cap.store'

export const useHomeController = () => {
  const { addStorie, showStories } = useCapStore()
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [cap, setCap] = useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleAddStory = () => {
    showStories()
  }

  return {
    handleAddStory,
  }
}
