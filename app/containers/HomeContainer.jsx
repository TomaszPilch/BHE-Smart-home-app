// @flow
import React from 'react'
import { Text } from 'react-native'
import { Header } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import TileList from '../components/TileList/TileList'
import Colors from './../themes/Colors'

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
        <Header
          backgroundColor={Colors.transparent}
          centerComponent={{ text: 'Home TODO', style: { fontSize: 24, color: Colors.secondaryLight } }}
          rightComponent={{ text: 'aa', icon: 'home', style: { color: '#fff' } }}
          style={{ border: 0 }}
        />
        <TileList list={tileList} />
      </SafeAreaView>
    )
  }
}

export default HomeContainer
