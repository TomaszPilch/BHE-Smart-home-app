// @flow
import React from 'react'
import { View, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'

import PlayerSongStyles from './PlayerSongStyles'

type PlayerSongProps = {
  imageUri: string,
  subTitle?: string,
  title: string,
}

const PlayerSong = (props: PlayerSongProps) => {
  const theme = useTheme()
  const styles = PlayerSongStyles(theme)
  const { imageUri, title, subTitle } = props

  return (
    <View style={styles.playerWrapper}>
      <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.imageStyles} />
      <Text style={styles.songTitle}>{title}</Text>
      {subTitle && <Text style={styles.albumTitle}>{subTitle}</Text>}
    </View>
  )
}

export default React.memo(PlayerSong)
