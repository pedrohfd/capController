import CompleteIcon from '../../assets/success.svg'
import DeleteIcon from '../../assets/trash.svg'
import ReloadIcon from '../../assets/reload.svg'
import { useRef } from 'react'
import { LeftButton, RightButton } from './styles'
import { StoriesProps, useCapStore } from '../../store/cap.store'
import * as Linking from 'expo-linking'

export const useItemController = (item: StoriesProps, index: number) => {
  const { addCap, removeCap } = useCapStore()
  const swipeRef = useRef<any>()

  const openLink = () => {
    Linking.openURL(item.link)
  }

  const leftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 60],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })

    return (
      <LeftButton
        onPress={() => swipeRef?.current?.close()}
        style={{ transform: [{ scale: scale }] }}
      >
        {!item.read && <CompleteIcon width={24} />}
        {item.read && <ReloadIcon width={24} />}
      </LeftButton>
    )
  }

  const rightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-60, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })

    return (
      <RightButton
        onPress={() => {
          swipeRef?.current?.close()
        }}
        style={{ transform: [{ scale: scale }] }}
      >
        <DeleteIcon width={24} />
      </RightButton>
    )
  }

  const incrementCap = () => {
    addCap(index)
  }

  const decrementCap = () => {
    removeCap(index)
  }

  return {
    leftActions,
    rightActions,
    swipeRef,
    openLink,
    incrementCap,
    decrementCap,
  }
}
