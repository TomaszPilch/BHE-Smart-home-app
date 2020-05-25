// @flow
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header/Header'
import ApplicationStyles from '../themes/ApplicationStyles'
import TileList from '../components/TileList/TileList'

const tileList = [
  {
    id: 6,
    icon: 'devices',
    text: 'All devices',
    horizontal: true,
    secondaryText: '45 devices',
    iconType: 'material',
    active: true,
  },
  {
    id: 1,
    icon: 'lightbulb-outline',
    text: 'Lighting',
    secondaryText: '4 devices',
  },
  {
    id: 7,
    icon: 'music',
    text: 'Music',
    secondaryText: '1 device',
  },
  {
    id: 5,
    icon: 'motion-sensor',
    text: 'Sensors',
  },
]

type RoomContainerProps = {}
class RoomContainer extends React.Component<RoomContainerProps> {
  handleOnPress = () => {
    this.props.navigation.navigate('deviceGroup')
  }

  handleBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <SafeAreaView>
        <Header backButton image="fridge" onBackButtonPress={this.handleBack} title="Kitchen" />
        <View style={ApplicationStyles.containerWithHeaderAndBottomBar}>
          <TileList list={tileList} onPress={this.handleOnPress} />
        </View>
      </SafeAreaView>
    )
  }
}

export default RoomContainer
