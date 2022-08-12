import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Image, TouchableOpacity, DeviceEventEmitter } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    icon: {
        back: {
            color: '#e52476',
            fontSize: 30,
        },
        filter: {
            color: '#e52476',
            fontSize: 30,
        },
    },
    phantomLogo: {
        height: 30,
        width: 30,
    },
})

const Nav = () => {
    const navigation = useNavigation()

    const goBack = () => navigation.goBack()

    const disconnectWallet = () => {
        DeviceEventEmitter.emit('event.disconnect')
    }

    return (
        <View style={styles.navbar}>
            <Ionicons onPress={goBack} style={styles.icon.back} name="arrow-back" />

            <TouchableOpacity onPress={disconnectWallet}>
                <Image style={styles.phantomLogo} source={require('../assets/phantom-wallet.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Nav
