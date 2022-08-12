import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import TabItem from './TabItem'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#130C19',
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

const TabBar = () => {
    const navigation = useNavigation()
    const activeTabItem = navigation.getState().index

    const tabs = [
        { name: 'Home', href: 'HomeNavigator' },
        { name: 'Me', href: 'MyScreen' },
    ]

    return (
        <View style={styles.container}>
            {tabs.map((tab, i) => (
                <TabItem key={i} {...tab} isFocused={activeTabItem === i} />
            ))}
        </View>
    )
}

export default TabBar
