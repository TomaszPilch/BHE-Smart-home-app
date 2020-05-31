// @flow
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

import MusicActionsStyles from './MusicActionsStyles'

type MusicActionsProps = {
  active: boolean,
  changeRepeatState?: (string) => void,
  onNext: () => void,
  togglePlay: (boolean) => void,
  onPrev: () => void,
  repeatState?: 'off' | 'once' | 'on',
  shuffleActive?: boolean,
  toggleShuffle?: (boolean) => void,
}
const repeatIcons = {
  off: 'repeat-off',
  once: 'repeat-once',
  on: 'repeat',
}
const changeRepeatStateTransition = {
  off: 'once',
  once: 'on',
  on: 'off',
}
const MusicActions = (props: MusicActionsProps) => {
  const theme = useTheme()
  const styles = MusicActionsStyles(theme)
  const { active, repeatState, shuffleActive, toggleShuffle, changeRepeatState, togglePlay, onNext, onPrev } = props

  const handleToggleShuffle = () => {
    toggleShuffle(!shuffleActive)
  }

  const handleChangeRepeatState = () => {
    changeRepeatState(changeRepeatStateTransition[repeatState])
  }

  const handleTogglePlay = () => {
    togglePlay(!active)
  }

  const repeatActive = repeatState !== 'off'
  return (
    <View style={styles.actionsWrapper}>
      {typeof toggleShuffle === 'function' && (
        <TouchableOpacity onPress={handleToggleShuffle}>
          <Icon
            color={shuffleActive ? theme.colors.primaryLight : theme.colors.primaryText}
            name={'shuffle'}
            size={theme.metrics.icons.s}
            type="material-community"
          />
        </TouchableOpacity>
      )}
      {typeof onPrev === 'function' && (
        <TouchableOpacity onPress={onPrev}>
          <Icon
            color={theme.colors.primaryText}
            name={'skip-previous'}
            size={theme.metrics.icons.l}
            type="material-community"
          />
        </TouchableOpacity>
      )}
      {typeof togglePlay === 'function' && (
        <TouchableOpacity onPress={handleTogglePlay}>
          <Icon
            color={theme.colors.primaryText}
            name={active ? 'pause-circle-outline' : 'play-circle-outline'}
            size={theme.metrics.icons.xl}
            type="material-community"
          />
        </TouchableOpacity>
      )}
      {typeof onNext === 'function' && (
        <TouchableOpacity onPress={onNext}>
          <Icon
            color={theme.colors.primaryText}
            name={'skip-next'}
            size={theme.metrics.icons.l}
            type="material-community"
          />
        </TouchableOpacity>
      )}
      {typeof changeRepeatState === 'function' && (
        <TouchableOpacity onPress={handleChangeRepeatState}>
          <Icon
            color={repeatActive ? theme.colors.primaryLight : theme.colors.primaryText}
            name={repeatIcons[repeatState]}
            size={theme.metrics.icons.s}
            type="material-community"
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

MusicActions.defaultProps = {
  repeatState: 'off',
}

export default React.memo(MusicActions)
