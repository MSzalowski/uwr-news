import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import store from 'store/rootReducer'
import { Store } from 'redux'
import { Background } from 'components/Background'
import Navigator from './Navigator'

export default () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={(store as unknown) as Store}>
      <Background>
        <Navigator />
      </Background>
    </Provider>
  )
}
