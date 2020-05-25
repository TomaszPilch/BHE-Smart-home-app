// @flow
import { StyleSheet } from 'react-native'

export default ({ metrics }) =>
  StyleSheet.create({
    scrollView: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    itemHorizontal: {
      margin: metrics.smallMargin,
    },
  })
