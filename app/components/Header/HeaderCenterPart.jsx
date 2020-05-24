// @flow
import React from 'react'
import { View, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'

import HeaderStyles from './HeaderStyles'

type HeaderCenterPartProps = {
  image: string,
  title: string,
}

const HeaderCenterPart = (props: HeaderCenterPartProps) => {
  const theme = useTheme()
  const styles = HeaderStyles(theme)

  return (
    <View style={styles.headerCenterWrapper}>
      <Image source={theme.images[props.image]} style={styles.logoStyles} />
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.logoStyles} />
    </View>
  )
}

export default React.memo(HeaderCenterPart)
