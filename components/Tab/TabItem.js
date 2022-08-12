import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const iconMap = {
    Home: 'home',
    Me: 'user',
}

const styles = StyleSheet.create({
    container: {
        color: '#e52476',
    },
    icon: {
        focused: {
            color: '#e52476',
            marginBottom: 3,
            alignSelf: 'center',
        },
        unfocused: {
            color: '#1c1929',
            marginBottom: 3,
            alignSelf: 'center',
        },
    },
    text: {
        focused: {
            color: '#e52476',
        },
        unfocused: {
            color: '#1c1929',
        },
    },
})

const TabItem = ({ name, href, isFocused }) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate(href)
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={isFocused && styles.container}>
                <FontAwesome name={iconMap[name]} size={25} style={styles.icon[isFocused ? 'focused' : 'unfocused']} />
                <Text style={styles.text[isFocused ? 'focused' : 'unfocused']}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TabItem
