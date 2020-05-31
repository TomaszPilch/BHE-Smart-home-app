// @flow
import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import MusicActions from '../components/music/MusicActions/MusicActions'

import MusicContainerStyles from './styles/MusicContainerStyles'
import PlayerSong from '../components/music/PlayerSong/PlayerSong'
import SongTimer from '../components/music/SongTimer/SongTimer'
import Icon from '../components/Icon/Icon'

type MusicContainerProps = {}
class MusicContainer extends React.Component<MusicContainerProps> {
  handleOnPress = () => {}

  handleTestFunc = (param) => {
    console.log(param)
  }

  // todo styles
  render() {
    return (
      <View style={MusicContainerStyles.wrapperView}>
        <TouchableOpacity style={MusicContainerStyles.menuButton}>
          <Icon name="menu-open" size="l" />
        </TouchableOpacity>
        <View style={MusicContainerStyles.musicPlayerWrapper}>
          <PlayerSong
            imageUri={'http://www.tobiassammet.com/images/Music/covers/GhostlightsCover.jpg'}
            title="Avantasia"
          />
        </View>
        <View>
          <SongTimer currentDuration={125} duration={452} />
        </View>
        <View style={MusicContainerStyles.musicActionsWrapper}>
          <MusicActions
            changeRepeatState={this.handleTestFunc}
            onNext={this.handleTestFunc}
            onPrev={this.handleTestFunc}
            togglePlay={this.handleTestFunc}
            toggleShuffle={this.handleTestFunc}
          />
        </View>
      </View>
    )
  }
}

export default MusicContainer
