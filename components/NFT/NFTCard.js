import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import solLogo from '../../assets/sol-logo.png'
import { getNFT, updateNFTID } from '../../stores/collection/collectionSlice'

const NFTCard = ({ id, image, name, price }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const exploreNFT = () => {
        dispatch(updateNFTID({ id }))
        dispatch(getNFT())
        navigation.push('NFTDetailScreen')
    }

    return (
        <TouchableOpacity onPress={exploreNFT} style={styles.container} key={id}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.contentTitle}>{name}</Text>
                <View style={styles.priceContainer}>
                    <Image style={styles.priceLogo} source={solLogo} />
                    <Text style={styles.priceValue}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1929',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5,
    },

    imageContainer: {
        height: 150,
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },

    cardContent: {
        padding: 15,
    },
    contentTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceLogo: {
        width: 15,
        height: 15,
    },
    priceValue: {
        marginLeft: 5,
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },
})

export default NFTCard
