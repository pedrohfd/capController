import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { colors } from '../../styles/colors'

export const Container = styled(SafeAreaView)`
  flex: 1;
`

export const Content = styled.View`
  background: ${colors.black};
  flex: 1;
  padding: 60px 30px 0;
`

export const List = styled.FlatList``

export const AddButton = styled.TouchableOpacity`
  position: absolute;

  bottom: 16px;
  right: 16px;

  width: 71px;
  height: 71px;

  border-radius: 35px;

  background: ${colors.yellow};

  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.View`
  height: 364px;
  width: 320px;

  background: ${colors.black};

  border-radius: 20px;

  padding: 33px 28px;

  justify-content: space-between;
`

export const ModalInput = styled.TextInput.attrs({
  placeholderTextColor: colors.gray,
})`
  color: ${colors.gray};

  border-bottom-width: 1px;

  border-color: ${colors.yellow};

  margin-bottom: 24px;

  padding: 0 0 16px 10px;
`

export const ModalButton = styled.TouchableOpacity`
  height: 61px;

  justify-content: center;
  align-items: center;

  background: ${colors.yellow};

  border-radius: 10px;
`

export const ModalButtonText = styled.Text``
