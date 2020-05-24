// @flow
import { StyleSheet } from 'react-native'

export default ({ colors, metrics }) =>
  StyleSheet.create({
    headerContainer: {
      borderBottomColor: colors.transparent,
      height: metrics.headerHeight,
      paddingTop: metrics.baseMargin,
    },
    headerCenterWrapper: {
      flex: 1,
      backgroundColor: colors.surface,
      width: metrics.screenWidth - metrics.doubleBaseMargin,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    logoStyles: {
      width: metrics.image.s,
      height: metrics.image.s,
      marginLeft: metrics.baseMargin,
    },
    title: {
      flex: 1,
      color: colors.primaryText,
      fontSize: 24,
      textAlign: 'center',
    },
  })
