// @flow
import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

import HeaderStyles from './HeaderStyles'

type HeaderCenterPartProps = {
  backButton?: boolean,
  image: string,
  onBackButtonPress?: Function,
  title: string,
}

const HeaderCenterPart = (props: HeaderCenterPartProps) => {
  const theme = useTheme()
  const styles = HeaderStyles(theme)

  return (
    <View
      style={StyleSheet.compose(
        styles.headerCenterWrapper,
        props.backButton ? styles.headerCenterWrapperReverse : null,
      )}
    >
      <Image source={theme.images[props.image]} style={styles.logoStyles} />
      <Text style={styles.title}>{props.title}</Text>
      {props.backButton ? (
        <TouchableOpacity onPress={props.onBackButtonPress} style={styles.logoStyles}>
          <Icon color={theme.colors.primaryText} name="arrow-back" size={theme.metrics.icons.m} />
        </TouchableOpacity>
      ) : (
        <View style={styles.logoStyles} />
      )}
    </View>
  )
}

export default React.memo(HeaderCenterPart)
