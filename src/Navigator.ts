import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Dashboard from 'screens/Dashboard'
import About from 'screens/About'

const Navigator = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    About: {
      screen: About,
    },
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
      header: null,
    },
  },
)

export default createAppContainer(Navigator)
