import React, { useEffect } from 'react'
import { NavigationInjectedProps, withNavigation } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews, NewsState } from 'store/news'
import { NewsCard } from 'components'
import { Container } from './components'

const Dashboard: React.FC<NavigationInjectedProps> = props => {
  const dispatch = useDispatch()
  const { loading, news } = useSelector((state: NewsState) => state)

  useEffect(() => {
    dispatch(fetchNews())
  }, [])

  return (
    <Container>
      {loading &&
        [...Array(6).keys()].map(i => <NewsCard key={i} loading={loading} />)}
      {!loading && (
        <>
          {news.map(el => (
            <NewsCard key={el.index} title={el.title} imageUrl={el.imageUrl} />
          ))}
        </>
      )}
    </Container>
  )
}

export default withNavigation(Dashboard)
