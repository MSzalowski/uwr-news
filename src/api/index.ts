import { fetch } from 'utils'

export const fetchNewsRequest = (page: number = 1) =>
  fetch.get('/news', { params: { page } })
