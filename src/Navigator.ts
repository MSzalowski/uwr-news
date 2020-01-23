import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Dashboard from 'screens/Dashboard'
import NewsDetails from 'screens/NewsDetails'
import ImageDetails from 'screens/ImageDetails'

const Navigator = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    Details: {
      screen: NewsDetails,
    },
    ImageDetails: {
      screen: ImageDetails,
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
