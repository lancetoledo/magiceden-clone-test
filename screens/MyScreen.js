import { StyleSheet, Text, View } from 'react-native'
import Background from '../components/Background'
import TabBar from '../components/Tab/TabBar'
import { useContext } from 'react'
import { MagicEdenContext } from '../context/context'

const MyScreen = () => {
  const { phantomWalletPublicKey } = useContext(MagicEdenContext)
  console.log(phantomWalletPublicKey, 'from my screen')
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>My Screen</Text>
      </View>

      <TabBar />
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
})

export default MyScreen
