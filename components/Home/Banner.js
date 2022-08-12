import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import banner from '../../assets/banner.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { getCollection, updateCollectionID } from '../../stores/collection/collectionSlice'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        height: 300,
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    content: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    title: {
        color: 'white',
        fontSize: 23,
        fontWeight: '700',
    },
    description: {
        color: '#A197AA',
        fontSize: 16,
        paddingVertical: 5,
    },
    cta: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
        },
        text: {
            color: '#e52476',
            fontSize: 15,
            fontWeight: '600',
        },
        icon: {
            color: '#e52476',
        },
    },
})

const Banner = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const exploreCollections = () => {
        dispatch(updateCollectionID({ id: 1 }))
        dispatch(getCollection())
        navigation.push('CollectionNavigator')
    }

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image style={styles.image} source={banner} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Ape</Text>
                <Text style={styles.description}>Just ape. A collection of 10,000 Apes that take us back to basics. None of the fluff, all of the value.</Text>
                <TouchableOpacity onPress={exploreCollections} style={styles.cta.container}>
                    <Text style={styles.cta.text}>Explore Collections </Text>
                    <AntDesign style={styles.cta.icon} name="arrowright" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Banner
