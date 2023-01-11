import { useState } from 'react'
import { useCapStore } from '../../store/cap.store'

export const useHomeController = () => {
  const { addStory, stories } = useCapStore()
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [cap, setCap] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleAddStory = () => {
    if (!name || !link || !cap) return

    addStory({ name, link, cap: Number(cap), read: false })

    resetStates()
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
