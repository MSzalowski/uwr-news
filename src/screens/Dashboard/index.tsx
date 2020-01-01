import React, { useEffect } from 'react'
import { withNavigation, FlatList, ScrollView } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { Metrics } from 'themes'
import { HeaderCard } from 'components/HeaderCard'
import { View, Text } from 'react-native'
import { fetchNews, NewsState } from 'store/news'
import { SmallSpacer, DoubleBaseSpacer } from 'components'
import { WIDGET_WIDTH, WIDGET_HEIGHT } from 'components/HeaderCard/components'
import { HeaderText, OldestNewsTitle } from './components'

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
  const { news, loading } = useSelector((state: NewsState) => state)
  const dispatch = useDispatch()

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
      <Text
        style={{
          width: WIDGET_WIDTH / 2 - Metrics.doubleBaseMargin,
          color: 'black',
          paddingLeft: Metrics.baseMargin,
          fontSize: 12,
          fontFamily: 'Lato-Black',
        }}
        numberOfLines={1}
      >
        {item.title}
      </Text>
      <Text
        style={{
          width: WIDGET_WIDTH / 2 - Metrics.doubleBaseMargin,
          paddingLeft: Metrics.baseMargin,
          color: '#424242',
          fontSize: 12,
        }}
        numberOfLines={1}
      >
        {item.date}
      </Text>
      <DoubleBaseSpacer />
    </View>
  )

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <>
      <View
        style={{
          marginTop: Metrics.statusBarHeight + Metrics.doubleBaseMargin,
          marginLeft: Metrics.baseMargin,
          marginRight: Metrics.baseMargin,
          marginBottom: Metrics.doubleBaseMargin,
        }}
      >
        <HeaderText>Najnowsze</HeaderText>
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
            <OldestNewsTitle>Wcześniej</OldestNewsTitle>
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
    </>
  )
}

export default withNavigation(Dashboard)
