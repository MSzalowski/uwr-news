import React, { useEffect } from 'react'
import { withNavigation, FlatList, ScrollView } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { Metrics } from 'themes'
import { HeaderCard } from 'components/HeaderCard'
import { View } from 'react-native'
import { fetchNews } from 'store/news'
import { SmallSpacer, DoubleBaseSpacer } from 'components'
import { WIDGET_WIDTH, WIDGET_HEIGHT } from 'components/HeaderCard/components'
import { RootState } from 'Types'
import { Background } from 'components/Background'
import { IconButton } from 'react-native-paper'
import { changeTheme } from 'store/app'
import { ThemeText } from 'components/ThemeText'

interface ArticleItem {
  item: {
    index?: number
    title?: string
    link?: string
    imageUrl?: string
    date?: string
  }
}

const Dashboard: React.FC = () => {
  const { news, loading } = useSelector(
    (state: RootState) => state?.newsReducer,
  )
  const { lightTheme } = useSelector((state: RootState) => state.appReducer)
  const dispatch = useDispatch()

  const handleThemeChange = () => {
    dispatch(changeTheme())
  }

  const renderItem = ({ item }: ArticleItem) => (
    <View
      style={{
        overflow: 'hidden',
        marginLeft: Metrics.smallMargin,
        marginRight: Metrics.smallMargin,
      }}
    >
      <HeaderCard imageUrl={item.imageUrl} link={item.link} />
      <SmallSpacer />
      <ThemeText
        numberOfLines={1}
        colorType="primary"
        style={{
          width: WIDGET_WIDTH / 2 - Metrics.doubleBaseMargin,
          paddingLeft: Metrics.baseMargin,
          paddingRight: Metrics.baseMargin,
          fontSize: 12,
          fontFamily: 'Lato-Black',
        }}
      >
        {item.title}
      </ThemeText>
      <ThemeText
        colorType="primaryLight"
        style={{
          width: WIDGET_WIDTH / 2 - Metrics.doubleBaseMargin,
          paddingLeft: Metrics.baseMargin,
          fontSize: 12,
        }}
        numberOfLines={1}
      >
        {item.date}
      </ThemeText>
      <DoubleBaseSpacer />
    </View>
  )

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <Background>
      <View
        style={{
          marginTop: Metrics.statusBarHeight + Metrics.doubleBaseMargin,
          marginLeft: Metrics.baseMargin,
          marginRight: Metrics.baseMargin,
          marginBottom: Metrics.doubleBaseMargin,
          flexDirection: 'row',
        }}
      >
        <ThemeText
          colorType="primary"
          style={{
            flex: 1,
            fontFamily: 'Lato-Black',
            lineHeight: 32,
            fontSize: 32,
            fontWeight: '600',
          }}
        >
          Najnowsze
        </ThemeText>
        <IconButton
          icon="lightbulb"
          size={16}
          color={lightTheme ? 'rgba(0,0,0,0.88)' : '#fa7921'}
          onPress={handleThemeChange}
        />
      </View>
      <ScrollView
        style={{
          minHeight: WIDGET_HEIGHT,
        }}
        contentContainerStyle={{
          paddingHorizontal: Metrics.baseMargin,
          paddingRight: 0,
        }}
        horizontal
      >
        {loading ? (
          <HeaderCard large loading />
        ) : (
          [...Array(4).keys()].map(key => (
            <HeaderCard
              large
              title={news[key]?.title}
              imageUrl={news[key]?.imageUrl}
              link={news[key]?.link}
            />
          ))
        )}
      </ScrollView>
      {!loading && (
        <>
          <View
            style={{
              marginTop: Metrics.baseMargin,
              marginLeft: Metrics.baseMargin,
              marginBottom: Metrics.baseMargin,
            }}
          >
            <ThemeText
              style={{ fontSize: 16, fontWeight: '500' }}
              colorType="primary"
            >
              Wcześniej
            </ThemeText>
          </View>
          <FlatList
            style={{ alignSelf: 'center' }}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            data={news.slice(4, news.length)}
            renderItem={renderItem}
            keyExtractor={item => item.link!}
            numColumns={2}
          />
        </>
      )}
    </Background>
  )
}

export default withNavigation(Dashboard)
