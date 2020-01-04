import React, { useEffect, useRef } from 'react'
import {
  Animated,
  TextStyle,
  ViewStyle,
  StyleProp,
  TextProperties,
} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from 'Types'

interface Props extends TextProperties {
  colorType: 'primary' | 'secondary' | 'primaryLight' | 'secondaryLight'
  style?: {} | StyleProp<ViewStyle | TextStyle>
}

export const ThemeText: React.FC<Props> = ({ colorType, ...props }) => {
  const { lightTheme } = useSelector((state: RootState) => state.appReducer)

  const colorValue = useRef(new Animated.Value(Number(lightTheme))).current

  useEffect(() => {
    Animated.timing(colorValue, {
      toValue: Number(lightTheme),
      duration: 200,
    }).start()
  }, [lightTheme])

  const color = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [
      colorType === 'primary'
        ? 'rgba(255,255,255,0.88)'
        : 'rgba(215,215,215,0.88)',
      colorType === 'primary' ? 'rgba(0,0,0,0.88)' : 'rgba(40,40,40,0.88)',
    ],
  })
  const styles = { ...(props.style as {}), color }

  return <Animated.Text {...props} style={styles} />
}
