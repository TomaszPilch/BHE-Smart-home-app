import { StyleSheet } from 'react-native'
import Colors from './Colors'
import Metrics from './Metrics'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

export default StyleSheet.create({
  mainContainer: {
    width: Metrics.screenWidth,
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginView: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    padding: Metrics.doubleBaseMargin,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  marginTop: {
    marginTop: Metrics.doubleBaseMargin,
  },
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
  },
  card: {
    width: Metrics.screenWidth / 2 - 1.5 * Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginLeft: Metrics.smallMargin,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  floorHeader: {
    padding: Metrics.baseMargin,
  },
  peripheryHeader: {
    flexDirection: 'row',
    padding: Metrics.baseMargin,
  },
  topNavigation: {
    marginTop: Metrics.baseMargin,
  },
})
