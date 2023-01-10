import { useState } from 'react'
import { useCapStore } from '../../store/cap.store'

export const useHomeController = () => {
  const { addStorie, showStories, stories } = useCapStore()
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [cap, setCap] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleAddStory = () => {
    if (!name || !link || !cap) return

    addStorie({ name, link, cap: Number(cap) })

    resetStates()
    showStories()
    handleToggleModal()
  }

  const resetStates = () => {
    setName('')
    setLink('')
    setCap('')
  }

  const handleToggleModal = () => {
    setIsModalVisible(prev => !prev)
  }

  return {
    handleAddStory,
    isModalVisible,
    handleToggleModal,
    setCap,
    setLink,
    setName,
    name,
    link,
    cap,
    stories,
  }
}
