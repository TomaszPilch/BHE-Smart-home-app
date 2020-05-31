// @flow
import { StyleSheet } from 'react-native'

export default ({ colors, metrics }) =>
  StyleSheet.create({
    headingText: {
      color: colors.primaryText,
      fontSize: metrics.font.title,
      padding: metrics.doubleBaseMargin,
      fontWeight: 'bold',
    },
    imageWrapper: {
      alignItems: 'center',
      marginTop: metrics.baseMargin,
    },
    image: {
      width: metrics.image.m,
      height: metrics.image.m,
    },
    actionButtonWrapper: {
      marginTop: metrics.doubleBaseMargin * 2,
      paddingHorizontal: metrics.screenWidth / 4,
    },
    buttonTurnOff: {
      backgroundColor: colors.secondaryDark,
    },
  })
