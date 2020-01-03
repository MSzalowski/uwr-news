import styled from 'styled-components'
import { View, Text } from 'react-native'
import { Metrics } from 'themes'

export const DateAndNightModeSwitchContainer = styled(View)`
  margin: ${Metrics.statusBarHeight + 2 * Metrics.doubleBaseMargin}px
    ${Metrics.doubleBaseMargin}px ${Metrics.baseMargin}px;
  flex-direction: row;
`

export const ContentContainer = styled(View)`
  margin: 0 ${Metrics.doubleBaseMargin}px;
  flex: 1;
`

export const Title = styled(Text)`
  font-size: 24;
  font-weight: 600;
  font-family: 'FiraMono-Regular';
  color: 'rgba(0,0,0,0.88)';
`

export const Body = styled(Text)`
  font-size: 16;
  text-align: justify;
  font-family: 'Lato-Light';
  color: 'rgba(0,0,0,0.88)';
`

export const Header = styled(View)`
  position: absolute;
  top: ${Metrics.statusBarHeight};
  left: 0;
  right: 0;
  height: ${Metrics.appBarHeight};
  margin-left: ${Metrics.baseMargin};
`
