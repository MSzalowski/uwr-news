import React from 'react'
import {Provider} from 'react-redux'
import store from 'store/rootReducer'

const App = () => <Provider store={store} />

export default App
