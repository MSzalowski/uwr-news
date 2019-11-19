import React from 'react'
import { View } from 'react-native'
import { Metrics } from '../../themes'

interface CustomSpacerProps {
  vertical?: boolean
  value: number
}

interface SpacerProps {
  vertical?: boolean
}

export const CustomSpacer = (props: CustomSpacerProps) => (
  <View
    style={props.vertical ? { width: props.value } : { height: props.value }}
  />
)

export const SmallSpacer = (props: SpacerProps) => (
  <CustomSpacer value={Metrics.smallMargin} vertical={props.vertical} />
)

export const BaseSpacer = (props: SpacerProps) => (
  <CustomSpacer value={Metrics.baseMargin} vertical={props.vertical} />
)

export const LargeSpacer = (props: SpacerProps) => (
  <CustomSpacer value={Metrics.largeMargin} vertical={props.vertical} />
)

export const DoubleBaseSpacer = (props: SpacerProps) => (
  <CustomSpacer value={Metrics.doubleBaseMargin} vertical={props.vertical} />
)
