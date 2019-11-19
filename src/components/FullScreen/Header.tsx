import React from 'react'
import {
  HeaderContainer,
  HeaderRoundedCornersContainer,
  HeaderRoundedCorners,
} from './components'
import { Appbar } from 'react-native-paper'
import { withNavigation, NavigationInjectedProps } from 'react-navigation'

interface Props extends NavigationInjectedProps {
  title: string
}

class Header extends React.Component<Props> {
  public static displayName = 'Header'

  public goBack = () => {
    this.props.navigation.goBack()
  }

  public render() {
    const { navigation, title } = this.props

    return (
      <>
        <HeaderContainer>
          {navigation.state.routeName !== 'Dashboard' && (
            <Appbar.BackAction onPress={this.goBack} />
          )}
          <Appbar.Content title={title} />
        </HeaderContainer>
        <HeaderRoundedCornersContainer>
          <HeaderRoundedCorners />
        </HeaderRoundedCornersContainer>
      </>
    )
  }
}

export default React.memo(withNavigation(Header))
