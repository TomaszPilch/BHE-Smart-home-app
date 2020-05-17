// @flow
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// containers
import TabNavigator from './TabNavigator'
import Themes from '../themes/Theme'

const Stack = createStackNavigator()

class StackNavigator extends React.Component<PropTypes> {
  render() {
    return (
      <NavigationContainer theme={Themes.DarkTheme}>
        <Stack.Navigator headerMode="screen" initialRouteName="home">
          {/*<Stack.Screen*/}
          {/*  component={React.Fragment}*/}
          {/*  key="login"*/}
          {/*  name="login"*/}
          {/*  options={{ header: () => <React.Fragment /> }}*/}
          {/*/>*/}
          <Stack.Screen
            component={TabNavigator}
            key="home"
            name="home"
            options={{ header: () => <React.Fragment /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default StackNavigator
