// @flow
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// containers
import HomeContainer from '../containers/HomeContainer'
import RoomContainer from '../containers/RoomContainer'
import DeviceGroupContainer from '../containers/DeviceGroupContainer'

const Stack = createStackNavigator()

class HomeStackNavigator extends React.Component<PropTypes> {
  render() {
    return (
      <Stack.Navigator headerMode="screen" initialRouteName="home">
        <Stack.Screen component={HomeContainer} key="home" name="home" options={{ header: () => <React.Fragment /> }} />
        <Stack.Screen component={RoomContainer} key="room" name="room" options={{ header: () => <React.Fragment /> }} />
        <Stack.Screen
          component={DeviceGroupContainer}
          key="deviceGroup"
          name="deviceGroup"
          options={{ header: () => <React.Fragment /> }}
        />
      </Stack.Navigator>
    )
  }
}

export default HomeStackNavigator
