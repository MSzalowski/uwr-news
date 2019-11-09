import {action, ActionType} from 'typesafe-actions'
import produce from 'immer'
import {delay, takeEvery} from '@redux-saga/core/effects'

const FETCH_NEWS = 'news/FETCH_NEWS'
const FETCH_NEWS_SUCCESS = 'news/FETCH_NEWS_SUCCESS'
const FETCH_NEWS_FAILURE = 'news/FETCH_NEWS_FAILURE'

interface NewsState {
  readonly loading: boolean
  readonly error: string | null
  readonly news: []
}

const initialState: NewsState = {
  loading: false,
  error: null,
  news: [],
}

export default (
  state: NewsState = initialState,
  action: ActionType<typeof actions>,
) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_NEWS:
        draft.loading = true
        draft.error = null
        return
      case FETCH_NEWS_SUCCESS:
        draft.loading = true
        draft.news = action.payload
        return
      case FETCH_NEWS_FAILURE:
        draft.loading = false
        draft.error = action.payload
        return
      default:
        return
    }
  })

export const fetchNews = () => action(FETCH_NEWS)

export const fetchNewsSuccess = (news: []) => action(FETCH_NEWS_SUCCESS, news)

export const fetchNewsFailure = (error: string) =>
  action(FETCH_NEWS_FAILURE, error)

const actions = {
  fetchNews,
  fetchNewsSuccess,
  fetchNewsFailure,
}

export function* fetchNewsSaga(action: ReturnType<typeof fetchNews>) {
  try {
    yield delay(500)
  } catch (e) {
    console.log(e)
  }
}

export function* newsSaga() {
  yield takeEvery(FETCH_NEWS, fetchNewsSaga)
}
