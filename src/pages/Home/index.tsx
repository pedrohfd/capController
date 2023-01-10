import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  AddButton,
  Container,
  Content,
  List,
  ModalButton,
  ModalButtonText,
  ModalContent,
  ModalInput,
} from './styles'
import AddButtonIcon from '../../assets/addButton.svg'
import Modal from 'react-native-modal'
import { View, Text } from 'react-native'
import { useHomeController } from './controller'
import { StoriesProps } from '../../store/cap.store'
import { Item } from '../../components/Item'

export const Home = () => {
  const {
    handleAddStory,
    isModalVisible,
    handleToggleModal,
    setCap,
    setLink,
    setName,
    cap,
    link,
    name,
    stories,
  } = useHomeController()

  return (
    <Container>
      <StatusBar style='light' hidden />
      <Content>
        <AddButton onPress={handleToggleModal}>
          <AddButtonIcon width={17} height={17} />
        </AddButton>

        <List
          data={stories}
          renderItem={({ item }: any) => <Item item={item} />}
        />

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={handleToggleModal}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <ModalContent>
            <View>
              <ModalInput
                placeholder='Nome'
                onChangeText={setName}
                value={name}
              />
              <ModalInput
                placeholder='Link'
                onChangeText={setLink}
                value={link}
              />
              <ModalInput
                placeholder='Capítulo atual'
                keyboardType='numeric'
                onChangeText={setCap}
                value={cap}
              />
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
