// @flow
import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

import TileWithIconStyles from './TileWithIconStyles'

type TileWithIconProps = {
  active?: boolean,
  horizontal?: boolean,
  icon: string,
  iconType?: string,
  id: string,
  secondaryText?: string,
  size: 'default' | 'small',
  text: string,
  wrapperStyles?: Object,
}
const TileWithIcon = (props: TileWithIconProps) => {
  const theme = useTheme()
  const styles = TileWithIconStyles(theme)
  const { active, text, secondaryText, icon, iconType, horizontal, id, onPress, size } = props

  const handleOnPress = useCallback(() => {
    onPress(id)
  }, [onPress, id])

  let wrapperStyles = styles.touchableWrapper
  if (horizontal) {
    wrapperStyles = StyleSheet.compose(wrapperStyles, styles.touchableWrapperHorizontal)
  }
  if (size === 'small') {
    wrapperStyles = StyleSheet.compose(wrapperStyles, styles.touchableWrapperSmall)
  }
  if (props.wrapperStyles) {
    wrapperStyles = StyleSheet.compose(wrapperStyles, props.wrapperStyles)
  }
  return (
    <TouchableOpacity onPress={handleOnPress} style={wrapperStyles}>
      <Icon
        color={active ? theme.colors.primary : theme.colors.text}
        name={icon}
        size={size === 'small' ? theme.metrics.icons.m : theme.metrics.icons.xl}
        type={iconType || 'material-community'}
      />
      <View style={styles.textWrapper}>
        <Text style={active ? styles.activeText : styles.text}>{text}</Text>
        {!!secondaryText && <Text style={styles.secondaryText}>{secondaryText}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(TileWithIcon)
