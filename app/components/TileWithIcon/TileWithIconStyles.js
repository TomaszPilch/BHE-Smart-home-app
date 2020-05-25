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
    touchableWrapperHorizontal: {
      width: metrics.screenWidth - metrics.doubleBaseMargin,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    touchableWrapperSmall: {
      width: metrics.screenWidth / 3.5 - metrics.baseMargin,
      height: metrics.screenWidth / 3.5 - metrics.baseMargin,
    },
    textWrapper: {
      alignItems: 'center',
    },
    text: {
      color: colors.primaryText,
      fontSize: 16,
      marginVertical: 5,
    },
    activeText: {
      color: colors.primaryDark,
      fontSize: 16,
      marginVertical: 5,
      fontWeight: 'bold',
    },
    secondaryText: {
      color: colors.secondaryText,
    },
  })
