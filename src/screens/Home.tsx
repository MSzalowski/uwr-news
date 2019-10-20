import React from 'react'
import {View, Text, Button} from 'react-native'
import {withNavigation, NavigationInjectedProps} from 'react-navigation'

class HomeScreen extends React.Component<NavigationInjectedProps> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="About Screen"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    )
  }
}

export default withNavigation(HomeScreen)
