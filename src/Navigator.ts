import {createStackNavigator} from 'react-navigation-stack'
import Home from 'screens/Home'
import About from 'screens/About'
import {createAppContainer} from 'react-navigation'

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    About: {
      screen: About,
    },
  },
  {
    initialRouteName: 'Home',
  },
)

export default createAppContainer(Navigator)
