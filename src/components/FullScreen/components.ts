import styled from 'styled-components'
import { View, Text } from 'react-native'
import { Surface, Snackbar, Divider, Appbar } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Metrics, Colors } from 'themes'

export const BaseContainer = styled(View)`
  padding: ${Metrics.baseMargin}px;
`

export const HeaderContainer = styled(Appbar.Header)`
  background-color: ${Colors.statusBar};
  height: ${Metrics.appBarHeight};
  justify-content: center;
  align-items: center;
  z-index: 2;
`

export const HeaderRoundedCornersContainer = styled(View)`
  height: 32;
  background-color: ${Colors.statusBar};
  z-index: 2;
`

export const HeaderRoundedCorners = styled(View)`
  height: 32;
  border-top-left-radius: 16;
  border-top-right-radius: 16;
  background-color: ${Colors.background};
`

export const Container = styled(View)`
  background-color: ${Colors.background};
  border-top-left-radius: 16;
  border-top-right-radius: 16;
  height: ${Metrics.screenHeight - Metrics.statusBarHeight};
`

export const HeaderWrapperContainer = styled(Surface)`
  z-index: 2;
`

export const BodyContainer = styled(KeyboardAwareScrollView)`
  flex: 1;
`

export const HeaderContentContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const HeaderText = styled(Text)`
  color: ${Colors.primaryText};
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  margin-left: ${Metrics.smallMargin}px;
`

export const DividerStyled = styled(Divider)`
  background-color: ${Colors.border};
`

export const StyledSnackbar = styled(Snackbar)`
  margin-bottom: ${(p: { bottomOffset?: number }) =>
    p.bottomOffset || Metrics.smallMargin};
`
