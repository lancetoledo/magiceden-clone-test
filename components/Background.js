import { memo } from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

const Background = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#130C19" />
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#130C19',
    },
})

export default memo(Background)
