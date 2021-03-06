// @flow
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TileList from '../components/TileList/TileList'
import Colors from './../themes/Colors'
import Header from '../components/Header/Header'
import ApplicationStyles from '../themes/ApplicationStyles'

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
    icon: 'tv',
    text: 'Living room',
    secondaryText: '4 devices',
    iconType: 'material',
  },
  {
    id: 7,
    icon: 'fridge-outline',
    text: 'Kitchen',
    secondaryText: '1 device',
  },
  {
    id: 5,
    icon: 'shower',
    text: 'Bathroom',
  },
  {
    id: 2,
    icon: 'car',
    text: 'Garage',
  },
]

type HomeContainerProps = {}
class HomeContainer extends React.Component<HomeContainerProps> {
  handleOnPress = (id: string) => {
    this.props.navigation.navigate('room')
  }

  render() {
    return (
      <SafeAreaView>
        <Header image="processor" title="My home" />
        <View style={ApplicationStyles.containerWithHeaderAndBottomBar}>
          <TileList list={tileList} onPress={this.handleOnPress} />
        </View>
      </SafeAreaView>
    )
  }
}

export default HomeContainer
