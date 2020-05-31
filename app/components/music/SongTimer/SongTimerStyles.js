// @flow
import { StyleSheet } from 'react-native'

import type { ThemeType } from '../../../themes/Theme'

export default ({ colors, metrics }: ThemeType) =>
  StyleSheet.create({
    songTimer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    text: {
      color: colors.primaryText,
    },
  })
