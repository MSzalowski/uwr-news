import { BaseSpacer } from 'components/spacers'
import React from 'react'
import { Platform, View, ScrollViewProps } from 'react-native'
import { Metrics } from 'themes'
import { LayoutEvent } from 'Types'
import { BodyContainer } from './components'

interface Props extends ScrollViewProps {
  scrollableContent?: boolean
  refreshControl?: JSX.Element
  onContainerLayout?(e: LayoutEvent): void
  onContentLayout?(e: LayoutEvent): void
  noPadding?: boolean
  fixedHeader?: boolean
  keyboardVerticalOffset?: number
  wasKeyboardShown?: boolean
}

export default class Body extends React.Component<Props> {
  public static displayName = 'Body'
  public static defaultProps = {
    keyboardVerticalOffset: 0,
  }

  public render() {
    const scrollableContent =
      this.props.scrollableContent || !!this.props.refreshControl

    return (
      <BodyContainer
        refreshControl={this.props.refreshControl}
        scrollEnabled={scrollableContent}
        onLayout={this.props.onContainerLayout}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={this.props.keyboardVerticalOffset}
        contentContainerStyle={[
          {
            paddingHorizontal: this.props.noPadding ? 0 : Metrics.baseMargin,
          },
          this.props.contentContainerStyle,
        ]}
        enableAutomaticScroll={Platform.OS === 'ios'}
        enableOnAndroid
      >
        <View onLayout={this.props.onContentLayout}>
          {((this.props.fixedHeader && !this.props.noPadding) ||
            (!this.props.noPadding && scrollableContent)) && <BaseSpacer />}
          {this.props.children}
          {!this.props.noPadding && scrollableContent && <BaseSpacer />}
        </View>
        {Platform.OS === 'ios' &&
          scrollableContent &&
          this.props.wasKeyboardShown &&
          !!this.props.keyboardVerticalOffset && (
            <View
              style={{
                height: -this.props.keyboardVerticalOffset,
              }}
            />
          )}
      </BodyContainer>
    )
  }
}
