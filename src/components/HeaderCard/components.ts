import styled from 'styled-components'
import { View, ImageBackground, Text } from 'react-native'
import { Metrics } from 'themes'

export const Container = styled(ImageBackground)<{
  large?: boolean
  noPadding?: boolean
}>`
  width: ${({ large }) => (large ? 348 : 170)};
  height: ${({ large }) => (large ? 250 : 130)};
  border-radius: 16;
  margin-right: ${({ noPadding }) => (noPadding ? 0 : 8)};
  margin-left: ${({ noPadding }) => (noPadding ? 0 : 8)};
`

export const TitleContainer = styled(View)`
  padding: ${Metrics.baseMargin}px ${Metrics.smallMargin}px;
  background-color: black;
`

export const Title = styled(Text)`
  font-size: 24;
  color: white;
  font-weight: 600;
`
