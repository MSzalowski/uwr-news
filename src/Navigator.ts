import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Dashboard from 'screens/Dashboard'

const Navigator = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
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
