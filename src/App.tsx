import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import store from 'store/rootReducer'
import { PaperTheme, Colors } from 'themes'
import Navigator from './Navigator'

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={PaperTheme}>
        <StatusBar
          backgroundColor={Colors.statusBar}
          barStyle="dark-content"
          translucent
        />
        <Navigator />
      </PaperProvider>
    </Provider>
  )
}

export default App
