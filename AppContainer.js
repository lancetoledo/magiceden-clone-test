import 'react-native-get-random-values'
import 'react-native-url-polyfill/auto'
import 'react-native-gesture-handler'
import { useContext } from 'react'
import { Provider } from 'react-redux'
import {
  DeviceEventEmitter,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeNavigator from './screens/HomeNavigator'
import MyScreen from './screens/MyScreen'
import Background from './components/Background'
import store from './stores'
import { MagicEdenContext } from './context/context'

const Stack = createStackNavigator()

const AppContainer = () => {
  const {
    connected,
    setConnected,
    deepLink,
    setDeepLink,
    dappKeyPair,
    sharedSecret,
    setSharedSecret,
    session,
    setSession,
    phantomWalletPublicKey,
    setPhantomWalletPublicKey,
    connect,
    disconnect,
  } = useContext(MagicEdenContext)
  DeviceEventEmitter.addListener('event.disconnect', () => disconnect())

  if (connected) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeNavigator' component={HomeNavigator} />
            <Stack.Screen name='MyScreen' component={MyScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.connectButton} onPress={connect}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectButton: {
    backgroundColor: '#e52476',
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})

export default AppContainer
