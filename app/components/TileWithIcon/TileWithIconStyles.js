// @flow
import { StyleSheet } from 'react-native'

import type { ThemeType } from '../../themes/Theme'

export default ({ colors, metrics }: ThemeType) =>
  StyleSheet.create({
    touchableWrapper: {
      backgroundColor: colors.surface,
      width: metrics.screenWidth / 2 - metrics.doubleBaseMargin,
      height: metrics.screenWidth / 2 - metrics.doubleBaseMargin,
      flexDirection: 'column',
      borderRadius: 5,
      marginTop: metrics.baseMargin,
      marginBottom: metrics.baseMargin,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.primaryText,
    },
    activeText: {
      color: colors.primaryDark,
    },
    secondaryText: {
      color: colors.secondaryText,
    },
  })
