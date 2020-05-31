// @flow
import React from 'react'
import { View, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Button } from 'react-native-elements'

import OnOffDeviceStyles from './OnOffDeviceStyles'

type OnOffDeviceProps = {
  active: boolean,
  buttonOffText?: string,
  buttonOnText?: string,
  id: string,
  image: string,
  onActionButtonClick: (string, boolean) => void,
  title: string,
}

const OnOffDevice = (props: OnOffDeviceProps) => {
  const theme = useTheme()
  const styles = OnOffDeviceStyles(theme)
  const { active, title, image, id, buttonOffText, buttonOnText, onActionButtonClick } = props

  const handleOnPress = () => {
    onActionButtonClick(id, !active)
  }

  return (
    <View>
      <Text style={styles.headingText}>{title}</Text>
      <View style={styles.imageWrapper}>
        <Image source={theme.images[image]} style={styles.image} />
      </View>
      <View style={styles.actionButtonWrapper}>
        <Button
          buttonStyle={active && styles.buttonTurnOff}
          onPress={handleOnPress}
          title={active ? buttonOffText || 'turn off' : buttonOnText || 'turn on'}
        />
      </View>
    </View>
  )
}

export default React.memo(OnOffDevice)
