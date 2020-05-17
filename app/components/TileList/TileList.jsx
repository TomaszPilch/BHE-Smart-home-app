// @flow
import React from 'react'
import { ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'

import TileWithIcon from '../TileWithIcon/TileWithIcon'
import TileListStyles from './TileListStyles'

const TileList = (props) => {
  const theme = useTheme()
  const styles = TileListStyles(theme)

  if (!Array.isArray(props.list)) {
    return null
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {props.list.map((item) => (
        <TileWithIcon icon={item.icon} key={item.id} secondaryText={item.secondaryText} text={item.text} />
      ))}
    </ScrollView>
  )
}

export default TileList
