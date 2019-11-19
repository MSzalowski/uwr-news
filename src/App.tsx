import React from 'react'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import store from 'store/rootReducer'
import { PaperTheme, Colors, Metrics } from 'themes'
import Navigator from './Navigator'
import { View, StatusBar } from 'react-native'

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={PaperTheme}>
        <View
          style={{
            backgroundColor: Colors.statusBar,
            height: Metrics.statusBarHeight,
          }}
        >
          <StatusBar
            backgroundColor={Colors.statusBar}
            barStyle="light-content"
            translucent
          />
        </View>
        <Navigator />
      </PaperProvider>
    </Provider>
  )
}

export default App
