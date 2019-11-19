import { Platform } from 'react-native'

const core = {
  primary: '#BA2253',
  primaryLight: '#df537f',
  secondary: '#6D3E6D',
  secondaryLight: '#886F92',
  accent: '#57B268',
  border: '#e0e0e0',
  canvas: '#ededed',
  background: '#000',
  divider: 'rgba(0,0,0,0.1)',
  positive: '#57B268',
  negative: '#BA2253',
  auxillary: '#21235B',
  auxillaryLight: '#2494C3',
  primaryText: '#fff',
  secondaryText: 'rgba(0,0,0,0.6)',
  hintText: 'rgba(0,0,0,0.38)',
  disabledText: 'rgba(0,0,0,0.1)',
  primaryIcon: 'rgba(0,0,0,0.54)',
  primaryTextLight: 'rgba(0,0,0,0.87)',
  secondaryTextLight: 'rgba(255,255,255,0.6)',
  widgetBackgroundLight:
    Platform.OS === 'ios' ? 'rgba(255, 255, 255, 0.8)' : 'rgb(240,240,240)',
  FABLight: '#C0BDBD',
  statusBar: '#212121',
}

export default {
  ...core,
  success: core.positive,
  error: core.negative,
  online: core.positive,
  offline: core.negative,
  statusBar: core.statusBar,
  widgetSwitchButtonActive: core.accent,
  widgetSwitchButtonInactive: core.auxillaryLight,
  alarmDisarmedWidget: core.secondary,
  avatarBackground: core.accent,
  alarmModeIconBreached: core.primary,
  gradient: {
    primary: [core.primary, core.primaryLight],
    alarm: [core.primary, core.primaryLight],
    secondary: [core.secondary, core.secondaryLight],
  },
}
