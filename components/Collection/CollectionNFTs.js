import { FlatList, StyleSheet } from 'react-native'
import NFTCard from '../NFT/NFTCard'

const CollectionNFTs = ({ nfts }) => {
    const keyExtractor = (item) => item.id
    const renderItem = ({ item }) => <NFTCard {...item} />

    return <FlatList style={styles.container} data={nfts} keyExtractor={keyExtractor} numColumns={2} renderItem={renderItem} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default CollectionNFTs
