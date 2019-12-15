import { action, ActionType } from 'typesafe-actions'
import produce from 'immer'
import { call, takeEvery, put } from '@redux-saga/core/effects'
import { fetchNewsRequest } from 'api'

const FETCH_NEWS = 'news/FETCH_NEWS'
const FETCH_NEWS_SUCCESS = 'news/FETCH_NEWS_SUCCESS'
const FETCH_NEWS_FAILURE = 'news/FETCH_NEWS_FAILURE'

type Articles = Array<{
  index?: number
  title?: string
  link?: string
  imageUrl?: string
}>

export interface NewsState {
  readonly loading: boolean
  readonly error: string | null
  readonly news: Articles
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
        return
      case FETCH_NEWS_SUCCESS:
        draft.loading = false
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
    const { data } = yield call(fetchNewsRequest)
    yield put(fetchNewsSuccess(data))
  } catch (e) {
    yield put(fetchNewsFailure(e))
  }
}

export function* newsSaga() {
  yield takeEvery(FETCH_NEWS, fetchNewsSaga)
}
