import { StyleSheet } from 'react-native'
import Metrics from '../../themes/Metrics'

export default StyleSheet.create({
  wrapperView: {
    flexDirection: 'column',
  },
  musicPlayerWrapper: {
    marginVertical: Metrics.baseMargin,
  },
  musicActionsWrapper: {
    marginHorizontal: Metrics.doubleBaseMargin,
    marginVertical: Metrics.baseMargin,
  },
  menuButton: {
    alignItems: 'flex-start',
    marginHorizontal: Metrics.doubleBaseMargin,
  },
})
