// @flow
import Colors from './Colors'
import Metrics from './Metrics'

export type ThemeType = {
  dark: boolean,
  colors: {
    primary: string,
    primaryLight: string,
    primaryDark: string,
    secondary: string,
    secondaryLight: string,
    secondaryDark: string,
    primaryText: string,
    secondaryText: string,
    background: string,
    surface: string,
    card: string,
    text: string,
    border: string,
  },
  metrics: Object,
}

const DarkTheme: ThemeType = {
  dark: true,
  colors: {
    ...Colors,
    card: Colors.surface,
    text: Colors.primaryText,
    border: '',
  },
  metrics: Metrics,
}

export default {
  DarkTheme,
}
