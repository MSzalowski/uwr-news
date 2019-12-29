import React, { useEffect } from 'react'
import { withNavigation, FlatList } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { Metrics } from 'themes'
import { HeaderCard } from 'components/HeaderCard'
import { View, Text } from 'react-native'
import { fetchNews, NewsState } from 'store/news'
import { SmallSpacer } from 'components'
import {
  Container,
  HeaderText,
  LatestNewsContainer,
  OldestNewsTitle,
} from './components'

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
  const dispatch = useDispatch()
  const { news, loading } = useSelector((state: NewsState) => state)

  const renderItem = ({ item }: ArticleItem) => (
    <View
      style={{
        paddingBottom: Metrics.baseMargin,
        width: 185,
        overflow: 'hidden',
      }}
    >
      <HeaderCard imageUrl={item.imageUrl} link={item.link} noPadding />
      <SmallSpacer />
      <Text
        style={{
          width: 150,
          color: 'black',
          fontSize: 14,
          fontFamily: 'Lato-Black',
        }}
        numberOfLines={1}
      >
        {item.title}
      </Text>
      <Text
        style={{ width: 185, color: '#424242', fontSize: 10 }}
        numberOfLines={1}
      >
        {item.date}
      </Text>
    </View>
  )

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <Container>
      <View style={{ flex: 0.4 }}>
        <HeaderText style={{ fontFamily: 'Lato-Black' }}>Najnowsze</HeaderText>
        <LatestNewsContainer
          horizontal
          contentContainerStyle={{
            paddingHorizontal: Metrics.smallMargin,
          }}
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
        </LatestNewsContainer>
      </View>
      {!loading && (
        <View style={{ flex: 0.6 }}>
          <OldestNewsTitle style={{ fontFamily: 'Lato-Black' }}>
            Wcześniej
          </OldestNewsTitle>
          <FlatList
            style={{
              alignSelf: 'center',
              marginTop: Metrics.smallMargin,
            }}
            contentContainerStyle={{
              paddingVertical: Metrics.smallMargin,
            }}
            data={news.slice(4, news.length)}
            renderItem={renderItem}
            keyExtractor={item => item.link!}
            numColumns={2}
          />
        </View>
      )}
    </Container>
  )
}

export default withNavigation(Dashboard)
