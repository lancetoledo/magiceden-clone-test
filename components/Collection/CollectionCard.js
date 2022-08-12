import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'
import { getCollection, updateCollectionID } from '../../stores/collection/collectionSlice'

const CollectionCard = ({ id, name, creator, thumbnail }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const openCollection = () => {
        dispatch(updateCollectionID({ id }))
        dispatch(getCollection())
        navigation.navigate('CollectionNavigator')
    }

    return (
        <TouchableOpacity onPress={openCollection} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={thumbnail} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentName}>{name}</Text>
                <View style={styles.creatorContainer}>
                    <Text style={styles.creatorName}>{creator}</Text>
                    <MaterialIcon style={styles.verifiedIcon} name="verified" />
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
        width: 200,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },

    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    contentName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    creatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },
    creatorName: {
        color: '#e52476',
        fontSize: 12,
    },

    verifiedIcon: {
        color: '#e52476',
        fontSize: 12,
        marginLeft: 5,
    },
})

export default CollectionCard
