import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'
import solLogo from '../assets/sol-logo.png'
import  {useMarket } from '../hooks/market'

const NFTDetailScreen = () => {
    const collection = useSelector((state) => state.collection.currentCollection)
    const nft = useSelector((state) => state.collection.currentNFT)
    
    const  {purchaseNft} = useMarket()
 
    return (
        <Background>
            <Nav />

            <View style={styles.container}>
                <Image style={styles.nftImage} source={nft.image} />

                <View style={styles.contentContainer}>
                    <Text style={styles.nftName}>{nft.name}</Text>
                    <Text style={styles.nftCreator}>{collection.creator}</Text>

                    <View style={styles.nftPriceWrapper}>
                        <Text style={styles.nftPriceTitle}>Current Price</Text>
                        <View style={styles.nftPriceContainer}>
                            <Image style={styles.nftPriceLogo} source={solLogo} />
                            <Text style={styles.nftPriceValue}>{nft.price}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={purchaseNft} style={styles.purchaseButton}>
                        <Text style={styles.buttonText}>Purchase</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
    },
    nftImage: {},
    nftName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    nftCreator: {
        color: '#e52476',
        fontSize: 12,
        paddingTop: 6,
    },
    nftPriceWrapper: {
        backgroundColor: '#1c1929',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
    },
    nftPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nftPriceTitle: {
        color: '#8E8E8E',
    },
    nftPriceLogo: {
        width: 16,
        height: 16,
    },
    nftPriceValue: {
        marginLeft: 5,
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
    },
    purchaseButton: {
        marginTop: 20,
        backgroundColor: '#e52476',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default NFTDetailScreen
