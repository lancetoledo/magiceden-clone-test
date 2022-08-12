import { View, Text, StyleSheet } from 'react-native'

const CollectionStats = () => {
    const stats = [
        {
            title: 'Floor',
            value: '3.89',
        },
        {
            title: 'Volume',
            value: '13K',
        },
        {
            title: 'Avg Sale',
            value: '3.65',
        },
        {
            title: 'Listed',
            value: '781',
        },
    ]

    return (
        <View style={styles.container}>
            {stats.map(({ title, value }, i) => (
                <View key={i} style={styles.statContainer}>
                    <Text style={styles.statValue}>{value} ◎</Text>
                    <Text style={styles.statTitle}>{title}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statContainer: {
        alignItems: 'center',
        backgroundColor: '#1c1929',
        borderWidth: 0.2,
        borderColor: 'gray',
        borderRadius: 3,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    statTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
    statValue: {
        color: 'white',
    },
})

export default CollectionStats
