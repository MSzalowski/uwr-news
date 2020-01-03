import React, { useEffect } from 'react'
import { withNavigation, NavigationInjectedProps } from 'react-navigation'
import { ScrollView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewsDetails } from 'store/news'
import { BaseSpacer } from 'components'
import { IconButton, TouchableRipple } from 'react-native-paper'
import { RootState } from 'Types'
import { changeTheme } from 'store/app'
import FontelloIcon from 'components/FontelloIcon'
import { Metrics } from 'themes'
import {
  DateAndNightModeSwitchContainer,
  ContentContainer,
  Title,
  Body,
  Header,
} from './components'

export default withNavigation((props: NavigationInjectedProps) => {
  const link = props.navigation.getParam('link')
  const dispatch = useDispatch()
  const news = useSelector((state: RootState) =>
    state?.newsReducer.news.find(el => el.link === link),
  )

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

  return (
    <>
      <Header>
        <TouchableRipple onPress={goBack} style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', paddingTop: 8 }}>
            <FontelloIcon
              name="angle-left"
              color="rgb(0,122,255)"
              size={24}
              style={{ marginRight: Metrics.smallMargin }}
            />
            <Title
              style={{
                fontSize: 12,
                lineHeight: 26,
                flex: 1,
                color: 'rgb(0,122,255)',
              }}
            >
              Wróć
            </Title>
          </View>
        </TouchableRipple>
      </Header>
      <DateAndNightModeSwitchContainer style={{ height: 32 }}>
        <Body
          style={{ flex: 1, lineHeight: 32, color: '#222222', fontSize: 12 }}
        >
          {news?.date}
        </Body>
        <View>
          <IconButton
            icon="lightbulb"
            size={16}
            color="#fa7921"
            onPress={handleThemeChange}
          />
        </View>
      </DateAndNightModeSwitchContainer>
      <ContentContainer>
        {news && (
          <>
            <Title>{news.title}</Title>
            <BaseSpacer />
            <ScrollView>
              <Body>{news?.body}</Body>
            </ScrollView>
          </>
        )}
      </ContentContainer>
    </>
  )
})
