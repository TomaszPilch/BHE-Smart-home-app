// @flow
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header/Header'
import ApplicationStyles from '../themes/ApplicationStyles'
import TileList from '../components/TileList/TileList'

const tileList = [
  {
    id: 1,
    icon: 'lamp',
    text: 'lamp',
    size: 'small',
  },
  {
    id: 2,
    icon: 'lava-lamp',
    text: 'lava-lamp',
    size: 'small',
    active: true,
  },
  {
    id: 3,
    icon: 'lamp',
    text: 'lamp',
    size: 'small',
  },
  {
    id: 4,
    icon: 'lava-lamp',
    text: 'lava-lamp',
    size: 'small',
  },
]

type DeviceGroupContainerProps = {}
class DeviceGroupContainer extends React.Component<DeviceGroupContainerProps> {
  handleOnPress = () => {}

  handleBack = () => {
    this.props.navigation.goBack()
  }

  // todo styles
  render() {
    return (
      <SafeAreaView>
        <Header backButton image="lightBulb" onBackButtonPress={this.handleBack} title="Lighting" />
        <View style={ApplicationStyles.containerWithHeaderAndBottomBar}>
          <View>
            <TileList horizontal list={tileList} onPress={this.handleOnPress} />
          </View>
          <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'red' }}>
              <Text>aa</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default DeviceGroupContainer
