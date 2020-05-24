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
    id: 1,
    icon: 'home-assistant',
    text: 'home assistant',
  },
  {
    id: 7,
    icon: 'home-assistant',
    text: 'home assistant',
  },
  {
    id: 6,
    icon: 'home-assistant',
    text: 'home assistant',
  },
  {
    id: 5,
    icon: 'home-assistant',
    text: 'home assistant',
  },
  {
    id: 2,
    icon: 'home-assistant',
    text: 'home assistant',
  },
  {
    id: 3,
    icon: 'home-assistant',
    text: 'home assistant',
  },
  {
    id: 4,
    icon: 'home-assistant',
    text: 'home assistant',
  },
]

type HomeContainerProps = {}
class HomeContainer extends React.Component<HomeContainerProps> {
  render() {
    return (
      <SafeAreaView>
        <Header image="tv" title="Living room" />
        <View style={ApplicationStyles.containerWithHeaderAndBottomBar}>
          <TileList list={tileList} />
        </View>
      </SafeAreaView>
    )
  }
}

export default HomeContainer
