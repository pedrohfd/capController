import CompleteIcon from '../../assets/success.svg'
import DeleteIcon from '../../assets/trash.svg'
import ReloadIcon from '../../assets/reload.svg'
import { useRef } from 'react'
import { LeftButton, RightButton } from './styles'
import { StoriesProps } from '../../store/cap.store'

export const useItemController = (item: StoriesProps) => {
  const swipeRef = useRef<any>()

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
        onPress={() => swipeRef?.current?.close()}
        style={{ transform: [{ scale: scale }] }}
      >
        <DeleteIcon width={24} />
      </RightButton>
    )
  }

  return { leftActions, rightActions, swipeRef }
}
