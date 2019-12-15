import styled from 'styled-components'
import { Metrics } from 'themes'
import { Card } from 'react-native-paper'
import { View } from 'react-native'

export const Container = styled(Card)`
  width: ${Metrics.screenWidth};
  height: 200;
  margin-bottom: ${Metrics.baseMargin};
  padding: ${Metrics.baseMargin}px;
  flex: 1;
`

export const LottieContainer = styled(View)`
  justify-content: center;
  align-items: center;
`
