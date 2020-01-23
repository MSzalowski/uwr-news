import React from 'react'
import { withNavigation, NavigationInjectedProps } from 'react-navigation'
import {
  View,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from 'react-native'

export default withNavigation((props: NavigationInjectedProps) => {
  const src = props.navigation.getParam('src')

  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.goBack()}
      style={{ flex: 1 }}
    >
      <Image source={{ uri: src }} resizeMode="contain" style={{ flex: 1 }} />
    </TouchableWithoutFeedback>
  )
})
