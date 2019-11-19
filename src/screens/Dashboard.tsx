import React from 'react'
import { Text, Button } from 'react-native'
import { withNavigation, NavigationInjectedProps } from 'react-navigation'
import { FullScreen } from 'components'

class Dashboard extends React.Component<NavigationInjectedProps> {
  public render() {
    return (
      <FullScreen>
        <FullScreen.Header title="News" />
        <FullScreen.Body>
          <Text>Home Screen</Text>
          <Button
            title="About Screen"
            onPress={() => this.props.navigation.navigate('About')}
          />
        </FullScreen.Body>
      </FullScreen>
    )
  }
}

export default withNavigation(Dashboard)
