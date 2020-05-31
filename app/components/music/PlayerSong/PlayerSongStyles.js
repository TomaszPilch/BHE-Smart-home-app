// @flow
import { StyleSheet } from 'react-native'

import type { ThemeType } from '../../../themes/Theme'

export default ({ colors, metrics }: ThemeType) =>
  StyleSheet.create({
    playerWrapper: {
      alignItems: 'center',
    },
    songTitle: {
      fontSize: metrics.font.subTitle,
      marginTop: metrics.baseMargin,
      color: colors.primaryText,
      fontWeight: 'bold',
    },
    albumTitle: {
      marginTop: metrics.smallMargin,
      color: colors.primaryText,
    },
    imageStyles: {
      width: metrics.screenWidth / 2,
      height: metrics.screenWidth / 2,
    },
  })
