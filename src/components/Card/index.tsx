import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import { Container } from './components'
import { Card, Title } from 'react-native-paper'

interface CardProps {
  title?: string
  imageUrl?: string
  link?: string
  loading?: boolean
}

export const NewsCard: React.FC<CardProps> = ({
  title,
  imageUrl,
  link,
  loading,
}) => {
  return (
    <Container>
      {loading && (
        <View style={[StyleSheet.absoluteFillObject, { flex: 1 }]}>
          <LottieView
            source={require('assets/loading-animation.json')}
            autoPlay
            loop
          />
        </View>
      )}
      {!loading && (
        <>
          <Card.Content>
            <Title style={{ color: 'black' }}>{title}</Title>
          </Card.Content>
          <Card.Cover source={{ uri: imageUrl }} />
        </>
      )}
    </Container>
  )
}
