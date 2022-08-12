import { StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Nav from '../components/Nav'
import CollectionHero from '../components/Collection/CollectionHero'
import CollectionStats from '../components/Collection/CollectionStats'
import CollectionNFTs from '../components/Collection/CollectionNFTs'
import { useSelector } from 'react-redux'

const CollectionScreen = () => {
  const collection = useSelector(state => state.collection.currentCollection)

  return (
    <Background>
      <Nav />

      <View style={styles.container}>
        <CollectionHero
          image={collection.image}
          title={collection.name}
          description={collection.description}
        />

        <CollectionStats />

        <CollectionNFTs nfts={collection.nfts} />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

export default CollectionScreen
