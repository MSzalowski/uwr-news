import React from 'react'
import { Platform, Keyboard, EmitterSubscription } from 'react-native'
import { has, get } from 'lodash'
import { LayoutEvent } from 'types'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import { Container, StyledSnackbar } from './components'

interface Props {
  scrollableContent?: boolean
  snackbar?: string | null
  snackbarProps?: 'visible' | 'onDismiss' | 'children'
  onSnackbarDismiss?: () => void
}

interface State {
  snackbarVisible: boolean
  bodyContainerHeight: number | null
  bodyContentHeight: number | null
  footerHeight: number
  keyboardVisible: boolean
  wasKeyboardShown: boolean
}

export default class FullScreen extends React.Component<Props, State> {
  public static Body = Body
  public static Footer = Footer
  public static Header = Header

  constructor(props: Props) {
    super(props)

    this.state = {
      snackbarVisible: false,
      bodyContainerHeight: null,
      bodyContentHeight: null,
      footerHeight: 0,
      keyboardVisible: false,
      wasKeyboardShown: false,
    }
  }

  private keyboardWillShowListener: EmitterSubscription
  private keyboardDidHideListener: EmitterSubscription

  public componentDidMount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener = Keyboard.addListener(
        'keyboardWillShow',
        this.keyboardWillShow,
      )
      this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        this.keyboardDidHide,
      )
    }
  }

  public componentWillUnmount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowListener.remove()
      this.keyboardDidHideListener.remove()
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.snackbar !== this.props.snackbar && !prevProps.snackbar) {
      this.setState({ snackbarVisible: true })
    }
  }

  private keyboardWillShow = () => {
    this.setState({ keyboardVisible: true })
  }

  private keyboardDidHide = () => {
    if (this.state.wasKeyboardShown) {
      this.setState({ keyboardVisible: false })
    } else {
      this.setState({
        wasKeyboardShown: true,
        keyboardVisible: false,
      })
    }
  }

  private getBodyContainerHeight = (e: LayoutEvent) =>
    this.setState({ bodyContainerHeight: e.nativeEvent.layout.height })

  private getBodyContentHeight = (e: LayoutEvent) =>
    this.setState({ bodyContentHeight: e.nativeEvent.layout.height })

  private handleSnackbarDismiss = () => {
    this.setState({ snackbarVisible: false })
    if (this.props.onSnackbarDismiss) {
      this.props.onSnackbarDismiss()
    }
  }

  public render() {
    const { bodyContainerHeight, bodyContentHeight } = this.state
    const scrollableContent =
      this.props.scrollableContent ||
      (!!bodyContainerHeight &&
        !!bodyContentHeight &&
        bodyContentHeight > bodyContainerHeight)

    const children = React.Children.map(
      this.props.children,
      (child: React.ReactNode) => {
        if (child && has(child, 'type')) {
          const displayName = get(child, 'type.displayName')
          switch (displayName) {
            case 'Footer':
              return React.cloneElement(child as JSX.Element, {
                scrollableContent,
                onLayout: (e: LayoutEvent) =>
                  this.setState({
                    footerHeight: e.nativeEvent.layout.height,
                  }),
              })
            case 'Body':
              return React.cloneElement(child as JSX.Element, {
                scrollableContent:
                  scrollableContent || this.state.keyboardVisible,
                fixedHeader: true,
                onContainerLayout: this.getBodyContainerHeight,
                onContentLayout: this.getBodyContentHeight,
                keyboardVerticalOffset: -this.state.footerHeight,
                wasKeyboardShown: this.state.wasKeyboardShown,
              })
            default:
              return child
          }
        }
        return child
      },
    )
    return (
      <Container>
        {children}
        <StyledSnackbar
          accessible
          testID="FullScreenSnackbar"
          accessibilityLabel="Snackbar"
          {...this.props.snackbarProps}
          visible={this.state.snackbarVisible}
          onDismiss={this.handleSnackbarDismiss}
          bottomOffset={this.state.footerHeight}
        >
          {this.props.snackbar}
        </StyledSnackbar>
      </Container>
    )
  }
}
