import styled from 'styled-components'
import { View, ImageBackground, Text } from 'react-native'
import { Metrics } from 'themes'

export const WIDGET_WIDTH = Metrics.screenWidth - 2 * Metrics.baseMargin
export const WIDGET_HEIGHT = Metrics.screenWidth / 1.75

export const Container = styled(ImageBackground)<{
  large?: boolean
}>`
  width: ${({ large }) => (large ? WIDGET_WIDTH : WIDGET_WIDTH / 2)};
  height: ${({ large }) => (large ? WIDGET_HEIGHT : WIDGET_HEIGHT / 2)};
  border-radius: 16;
  margin-right: ${({ large }) => (large ? Metrics.baseMargin : 0)};
`

export const TitleContainer = styled(View)`
  padding: ${Metrics.baseMargin}px ${Metrics.smallMargin}px;
  background-color: rgba(0, 0, 0, 0.88);
`

export const Title = styled(Text)`
  font-size: 12;
  text-align: center;
  color: rgba(255, 255, 255, 0.88);
  font-family: 'Lato-Black';
  font-weight: 600;
`
