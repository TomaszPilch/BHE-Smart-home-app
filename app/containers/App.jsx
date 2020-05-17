import React, { Component } from 'react'
import { StatusBar, View, Linking } from 'react-native'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ApplicationStyles from '../themes/ApplicationStyles'
import StackNavigator from '../navigation/StackNavigator'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/es/integration/react'
// import RootContainer from './RootContainer'
// import store from '../store/createStore'

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={ApplicationStyles.flex}>
          <StatusBar barStyle="light-content" translucent />
          <StackNavigator uriPrefix="/app" />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default App
