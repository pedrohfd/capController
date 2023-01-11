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
import { View } from 'react-native'
import { useHomeController } from './controller'
import { Item } from '../../components/Item'
import { colors } from '../../styles/colors'

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
      <StatusBar style='light' backgroundColor={colors.black} />
      <Content>
        <List
          data={stories}
          renderItem={({ item, index }: any) => (
            <Item item={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          ListFooterComponent={<View style={{ height: 20 }} />}
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
      <AddButton
        onPress={handleToggleModal}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <AddButtonIcon width={17} height={17} />
      </AddButton>
    </Container>
  )
}
