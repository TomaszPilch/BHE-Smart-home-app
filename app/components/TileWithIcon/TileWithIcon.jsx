// @flow
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

import TileWithIconStyles from './TileWithIconStyles'

type TileWithIconProps = {
  active?: boolean,
  icon: string,
  iconType?: string,
  secondaryText?: string,
  text: string,
}
const TileWithIcon = (props: TileWithIconProps) => {
  const theme = useTheme()
  const styles = TileWithIconStyles(theme)
  const { active, text, secondaryText, icon, iconType } = props

  return (
    <TouchableOpacity style={styles.touchableWrapper}>
      <Icon
        color={active ? theme.colors.primary : theme.colors.text}
        name={icon}
        size={theme.metrics.icons.xl}
        type={iconType || 'material-community'}
      />
      <Text style={active ? styles.activeText : styles.text}>{text}</Text>
      {!!secondaryText && <Text style={styles.secondaryText}>{secondaryText}</Text>}
    </TouchableOpacity>
  )
}

export default React.memo(TileWithIcon)
