// @flow
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

import TileWithIcon from '../TileWithIcon/TileWithIcon'
import TileListStyles from './TileListStyles'

const TileList = (props) => {
  const theme = useTheme()
  const styles = TileListStyles(theme)

  if (!Array.isArray(props.list)) {
    return null
  }

  let contentContainerStyle = styles.scrollView
  if (props.scrollViewStyles) {
    contentContainerStyle = StyleSheet.compose(contentContainerStyle, props.scrollViewStyles)
  }

  return (
    <ScrollView style={{ flex: 0 }} contentContainerStyle={contentContainerStyle} horizontal={props.horizontal}>
      {props.list.map((item) => (
        <TileWithIcon
          key={item.id}
          {...item}
          onPress={props.onPress}
          wrapperStyles={props.horizontal ? styles.itemHorizontal : null}
        />
      ))}
    </ScrollView>
  )
}

export default TileList
