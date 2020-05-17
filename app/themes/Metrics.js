import { Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  baseMargin: 15,
  doubleBaseMargin: 30,
  smallMargin: 10,
  screenWidth,
  screenHeight,
  icons: {
    m: 32,
    l: 48,
    xl: 64,
    xxl: 86,
  },
  image: {
    m: 128,
  },
}

export default metrics
