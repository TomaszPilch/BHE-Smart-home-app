// @flow
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

// containers
import HomeContainer from '../containers/HomeContainer'

// theme
import Colors from '../themes/Colors'
import HomeStackNavigator from './HomeStackNavigator'

const Tab = createBottomTabNavigator()

const icons = {
  home: 'home',
  automation: 'cloud',
  favourite: 'heart',
  notifications: 'bell',
  settings: 'settings',
}

const handleGetScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = 'home'
    if (icons[route.name]) {
      iconName = icons[route.name]
    }
    if (!focused) {
      iconName += '-outline'
    }

    return <Icon color={color} name={iconName} size={size} type="material-community" />
  },
})

const TabNavigator = () => (
  <Tab.Navigator screenOptions={handleGetScreenOptions}>
    <Tab.Screen component={HomeStackNavigator} name="home" />
    <Tab.Screen component={HomeContainer} name="automation" />
    <Tab.Screen component={HomeContainer} name="favourite" />
    <Tab.Screen component={HomeContainer} name="notifications" />
    <Tab.Screen component={HomeContainer} name="settings" />
  </Tab.Navigator>
)

export default TabNavigator
