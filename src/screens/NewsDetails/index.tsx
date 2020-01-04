import React, { useEffect } from 'react'
import { withNavigation, NavigationInjectedProps } from 'react-navigation'
import {
  ScrollView,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewsDetails } from 'store/news'
import { BaseSpacer } from 'components'
import { IconButton } from 'react-native-paper'
import { RootState } from 'Types'
import { changeTheme } from 'store/app'
import FontelloIcon from 'components/FontelloIcon'
import { Metrics } from 'themes'
import { Background } from 'components/Background'
import {
  DateAndNightModeSwitchContainer,
  ContentContainer,
  Header,
} from './components'
import { ThemeText } from 'components/ThemeText'

export default withNavigation((props: NavigationInjectedProps) => {
  const link = props.navigation.getParam('link')
  const dispatch = useDispatch()
  const news = useSelector((state: RootState) =>
    state?.newsReducer.news.find(el => el.link === link),
  )
  const { lightTheme } = useSelector((state: RootState) => state.appReducer)

  useEffect(() => {
    if (link) {
      dispatch(fetchNewsDetails(link))
    }
  }, [link])

  const handleThemeChange = () => {
    dispatch(changeTheme())
  }

  const goBack = () => {
    props.navigation.goBack()
  }

  const renderImages = (src: string) => (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate('ImageDetails', { src })}
    >
      <Image
        key={src}
        source={{ uri: src }}
        resizeMode="contain"
        style={{ flex: 1, minHeight: 300 }}
      />
    </TouchableWithoutFeedback>
  )

  return (
    <Background>
      <Header>
        <View>
          <TouchableWithoutFeedback onPress={goBack}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: Metrics.baseMargin,
                marginLeft: Metrics.baseMargin,
              }}
            >
              <FontelloIcon
                name="angle-left"
                color="rgb(0,122,255)"
                size={24}
                style={{ marginRight: Metrics.smallMargin }}
              />
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 26,
                  flex: 1,
                  color: 'rgb(0,122,255)',
                }}
              >
                Wróć
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Header>
      <DateAndNightModeSwitchContainer style={{ height: 32 }}>
        <ThemeText
          colorType="primaryLight"
          style={{
            flex: 1,
            lineHeight: 32,
            fontSize: 12,
            textAlign: 'justify',
            fontFamily: 'Lato-Light',
          }}
        >
          {news?.date}
        </ThemeText>
        <View>
          <IconButton
            icon="lightbulb"
            size={16}
            color={lightTheme ? 'rgba(0,0,0,0.88)' : '#fa7921'}
            onPress={handleThemeChange}
          />
        </View>
      </DateAndNightModeSwitchContainer>
      <ContentContainer>
        {news && (
          <>
            <ThemeText
              style={{
                fontSize: 24,
                fontWeight: '600',
                fontFamily: 'FiraMono-Regular',
              }}
              colorType="primary"
            >
              {news.title}
            </ThemeText>
            <BaseSpacer />
            <ScrollView style={{ flex: 1 }}>
              <ThemeText
                style={{
                  fontSize: 16,
                  textAlign: 'justify',
                  fontFamily: 'Lato-Light',
                }}
                colorType="primary"
              >
                {news?.body}
              </ThemeText>
              {news?.images?.length! > 0 && news?.images?.map(renderImages)}
            </ScrollView>
          </>
        )}
      </ContentContainer>
    </Background>
  )
})
