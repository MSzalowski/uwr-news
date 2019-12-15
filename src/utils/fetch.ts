import axios, { AxiosInstance } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: 'https://uwrnews.herokuapp.com',
}) as AxiosInstance

export default client
