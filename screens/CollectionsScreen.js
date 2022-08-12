import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native'
import Background from '../components/Background'
import Banner from '../components/Home/Banner'
import CollectionCard from '../components/Collection/CollectionCard'
import TabBar from '../components/Tab/TabBar'

const CollectionsScreen = () => {
    const collections = [
        {
            id: 1,
            name: 'Just Ape.',
            creator: 'Just Ape.',
            thumbnail: require('../assets/ape-6083.png'),
        },
        {
            id: 2,
            name: 'Okay Bears',
            creator: 'Okay Bears',
            thumbnail: require('../assets/okay-bears.png'),
        },
        {
            id: 3,
            name: 'Vandal City',
            creator: 'Vandal City',
            thumbnail: require('../assets/vandal-city.png'),
        },
    ]

    return (
        <Background>
            <ScrollView style={styles.container}>
                <Banner />

                <View
                    style={{
                        borderBottomColor: '#1c1929',
                        borderBottomWidth: 1,
                    }}
                />

                <View style={styles.collectionCatalog}>
                    <Text style={styles.catalogTitle}>Popular Collections</Text>
                    <FlatList style={styles.list} horizontal={true} data={collections} keyExtractor={(item) => item.id} renderItem={({ item }) => <CollectionCard {...item} />} />
                </View>
            </ScrollView>

            <TabBar />
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    collectionCatalog: {
        marginHorizontal: 10,
        marginVertical: 30,
    },
    catalogTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
})

export default CollectionsScreen
