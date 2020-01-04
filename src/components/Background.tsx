import React, { useEffect, useRef } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { RootState } from 'Types'
import { useSelector } from 'react-redux'

export const Background: React.FC = props => {
  const { lightTheme } = useSelector((state: RootState) => state.appReducer)

  const backgroundColor = useRef<Animated.Value>(
    new Animated.Value(Number(lightTheme)),
  ).current

  useEffect(() => {
    Animated.timing(backgroundColor, {
      toValue: Number(lightTheme),
      duration: 200,
    }).start()
  }, [lightTheme])

  const bgColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(0,0,0)', 'rgb(255,255,255)'],
  })

  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor: bgColor }]}
      {...props}
    />
  )
}
