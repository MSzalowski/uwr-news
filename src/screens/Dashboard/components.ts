import styled from 'styled-components'
import { ScrollView, View, Text } from 'react-native'
import { Metrics } from 'themes'

export const Container = styled(View)`
  margin-top: ${Metrics.statusBarHeight + Metrics.doubleBaseMargin};
  flex: 1;
`

export const LatestNewsContainer = styled(ScrollView)`
  padding-top: ${Metrics.doubleBaseMargin};
  padding-bottom: ${Metrics.baseMargin};
`

export const OldestNewsContainer = styled(ScrollView)`
  padding-top: ${Metrics.doubleBaseMargin};
  padding-left: ${Metrics.baseMargin};
`

export const OldestNewsTitle = styled(Text)`
  margin-top: ${Metrics.baseMargin};
  margin-left: ${Metrics.doubleBaseMargin};
  font-size: 18;
  font-weight: 500;
  color: #000;
`

export const HeaderText = styled(Text)`
  padding-left: ${Metrics.baseMargin};
  font-size: 42;
  font-weight: 600;
  color: #000;
`
