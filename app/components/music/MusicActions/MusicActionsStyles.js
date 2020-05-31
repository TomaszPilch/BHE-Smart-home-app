// @flow
import { StyleSheet } from 'react-native'

export default ({ colors, metrics }) =>
  StyleSheet.create({
    actionsWrapper: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
