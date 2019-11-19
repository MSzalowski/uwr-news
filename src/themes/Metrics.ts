import { Dimensions, Platform, StatusBar } from 'react-native'
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window')

export default {
  smallMargin: 8,
  baseMargin: 16,
  halfLargeMargin: 12,
  largeMargin: 24,
  doubleBaseMargin: 32,
  horizontalLineHeight: 1,
  roundness: 4,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight:
    Platform.OS === 'android' && StatusBar.currentHeight! > 25 // Device has notch
      ? 0
      : getStatusBarHeight(),
  appBarHeight: 56,
  frontLayerHeaderHeight: 48,
  bottomTabsHeight: 55 + getBottomSpace(),
  tabsRowHeight: 48,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  primaryButtonHeight: 36,
  FAB: {
    small: 40,
    large: 56,
  },
}
