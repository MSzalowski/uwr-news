import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import LottieView from 'lottie-react-native'
import { Container, TitleContainer, Title } from './components'
import { withNavigation } from 'react-navigation'

interface Props {
  loading?: boolean
  imageUrl?: string
  date?: string
  title?: string
  large?: boolean
  link?: string
}

export const HeaderCard = withNavigation<Props>(
  ({ imageUrl, title, loading, large, ...props }) => {
    const handlePress = () => {
      props.navigation.navigate('Details', { link: props.link })
    }
    return (
      <TouchableRipple onPress={handlePress}>
        <Container
          source={{ uri: imageUrl! }}
          style={{ overflow: 'hidden' }}
          large={large}
        >
          <Image
            source={{ uri: imageUrl! }}
            style={{ alignSelf: 'center', flex: 1 }}
          />
          {loading && (
            <View style={[StyleSheet.absoluteFillObject, { flex: 1 }]}>
              <LottieView
                source={require('assets/loading-animation.json')}
                autoPlay
                loop
                resizeMode="cover"
              />
            </View>
          )}
          {large && title && (
            <TitleContainer>
              <Title numberOfLines={1}>{title}</Title>
            </TitleContainer>
          )}
        </Container>
      </TouchableRipple>
    )
  },
)
