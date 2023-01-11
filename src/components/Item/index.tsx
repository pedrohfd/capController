import { StoriesProps } from '../../store/cap.store'
import { useItemController } from './controller'
import {
  AddButton,
  CapArea,
  CapText,
  Container,
  RemoveButton,
  Slide,
  SlideContent,
  Title,
  ToReadButton,
  ToReadText,
} from './styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AddIcon from '../../assets/add.svg'
import RemoveIcon from '../../assets/remove.svg'

export const Item = ({ item }: { item: StoriesProps }) => {
  const { leftActions, rightActions, swipeRef } = useItemController(item)

  return (
    <GestureHandlerRootView>
      <Container>
        <Slide
          renderLeftActions={leftActions}
          renderRightActions={rightActions}
          ref={swipeRef}
        >
          <SlideContent>
            <Title>{item.name}</Title>

            <CapArea>
              <RemoveButton>
                <RemoveIcon width={24} />
              </RemoveButton>

              <CapText>{item.cap}</CapText>

              <AddButton>
                <AddIcon width={24} />
              </AddButton>
            </CapArea>
          </SlideContent>
        </Slide>

        <ToReadButton>
          <ToReadText>Ler</ToReadText>
        </ToReadButton>
      </Container>
    </GestureHandlerRootView>
  )
}
