import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  AddButton,
  Container,
  Content,
  ModalButton,
  ModalButtonText,
  ModalContent,
  ModalInput,
} from './styles'
import AddButtonIcon from '../../assets/addButton.svg'
import Modal from 'react-native-modal'
import { View } from 'react-native'
import { useHomeController } from './controller'

export const Home = () => {
  const { handleAddStory } = useHomeController()

  return (
    <Container>
      <StatusBar style='light' hidden />
      <Content>
        <AddButton>
          <AddButtonIcon width={17} height={17} />
        </AddButton>

        <Modal
          isVisible
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <ModalContent>
            <View>
              <ModalInput placeholder='Nome' />
              <ModalInput placeholder='Link' />
              <ModalInput placeholder='Capítulo atual' keyboardType='numeric' />
            </View>

            <ModalButton onPress={handleAddStory}>
              <ModalButtonText>Adicionar</ModalButtonText>
            </ModalButton>
          </ModalContent>
        </Modal>
      </Content>
    </Container>
  )
}
