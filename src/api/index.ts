import { fetch } from 'utils'

export const fetchNewsRequest = (page: number = 1) =>
  fetch.get('/news', { params: { page } })

export const fetchNewsDetailsRequest = (link: string) =>
  fetch.get('/news', { data: { link } })
