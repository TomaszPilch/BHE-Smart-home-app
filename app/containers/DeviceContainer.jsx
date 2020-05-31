// @flow
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import MusicDevice from '../components/devices/MusicDevice/MusicDevice'

type DeviceGroupContainerProps = {}
class DeviceContainer extends React.Component<DeviceGroupContainerProps> {
  handleOnPress = () => {}

  handleBack = () => {
    this.props.navigation.goBack()
  }

  // todo styles
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <MusicDevice />
        </View>
      </ScrollView>
    )
  }
}

export default DeviceContainer
