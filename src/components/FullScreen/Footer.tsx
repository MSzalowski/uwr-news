import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Divider } from 'react-native-paper'
import { BaseContainer } from './components'

interface LayoutEvent {
  nativeEvent: {
    layout: {
      height: number
    }
  }
}

interface Props {
  scrollableContent?: boolean
  alwaysShowDivider?: boolean
  onLayout?(e: LayoutEvent): void
  style?: StyleProp<ViewStyle>
}

export default class Footer extends React.Component<Props> {
  public static displayName = 'Footer'

  public render() {
    return (
      <React.Fragment>
        {(this.props.alwaysShowDivider || this.props.scrollableContent) && (
          <Divider />
        )}
        <BaseContainer onLayout={this.props.onLayout} style={this.props.style}>
          {this.props.children}
        </BaseContainer>
      </React.Fragment>
    )
  }
}
