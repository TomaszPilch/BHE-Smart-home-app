// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import moment from 'moment'

import SongTimerStyles from './SongTimerStyles'

type PlayerSongProps = {
  duration: number,
  currentDuration: number,
}

const SongTimer = (props: PlayerSongProps) => {
  const theme = useTheme()
  const styles = SongTimerStyles(theme)

  const format = props.duration >= 3600 ? 'HH:mm:ss' : 'mm:ss'
  return (
    <View style={styles.songTimer}>
      <Text style={styles.text}>
        {moment.utc(moment.duration(props.currentDuration, 'seconds').asMilliseconds()).format(format)}
      </Text>
      <Text style={styles.text}>/</Text>
      <Text style={styles.text}>
        {moment.utc(moment.duration(props.duration, 'seconds').asMilliseconds()).format(format)}
      </Text>
    </View>
  )
}

export default React.memo(SongTimer)
