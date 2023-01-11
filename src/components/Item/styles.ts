import styled from 'styled-components/native'
import { Swipeable } from 'react-native-gesture-handler'
import { fonts } from '../../styles/fonts'
import { colors } from '../../styles/colors'

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.yellow};

  margin-bottom: 24px;
  padding: 0 10px;
`

export const Slide = styled(Swipeable)``

export const SlideContent = styled.View`
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.regular};

  color: ${colors.gray};
  flex-wrap: wrap;
  width: 190px;
`

export const LeftButton = styled.TouchableOpacity`
  margin-right: 40px;
  align-items: center;
  justify-content: center;
`

export const RightButton = styled.TouchableOpacity`
  margin-left: 40px;
  align-items: center;
  justify-content: center;
`

export const CapArea = styled.View`
  flex-direction: row;
`

export const AddButton = styled.TouchableOpacity`
  margin-left: 16px;
`

export const RemoveButton = styled.TouchableOpacity`
  margin-right: 16px;
`

export const CapText = styled.Text`
  font-family: ${fonts.medium};
  font-size: 16px;

  color: ${colors.gray};
`

export const ToReadButton = styled.TouchableOpacity`
  background: ${colors.yellow};

  align-items: center;
  justify-content: center;

  margin-top: 16px;
  margin-bottom: 16px;

  height: 30px;

  border-radius: 5px;
`

export const ToReadText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.medium};

  color: ${colors.black};
`
