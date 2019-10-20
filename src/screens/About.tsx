import React from 'react'
import {View, Text, Button} from 'react-native'
import {withNavigation, NavigationInjectedProps} from 'react-navigation'

class AboutScreen extends React.Component<NavigationInjectedProps> {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>About Screen</Text>
        <Button
          title="Home Screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default withNavigation(AboutScreen)
