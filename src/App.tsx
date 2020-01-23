import React from 'react'
import { Provider } from 'react-redux'
import store from 'store/rootReducer'
import { Store } from 'redux'
import { Background } from 'components/Background'
import Navigator from './Navigator'

export default () => (
  <Provider store={(store as unknown) as Store}>
    <Background>
      <Navigator />
    </Background>
  </Provider>
)
