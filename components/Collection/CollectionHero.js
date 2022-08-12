import { View, Text, StyleSheet, Image } from 'react-native'

const CollectionHero = ({ image, title, description }) => {
    return (
        <View style={styles.heroContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heroContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        overflow: 'hidden',
        marginRight: 25,
    },
    contentContainer: {
        flex: 1,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    description: {
        color: 'gray',
    },
})

export default CollectionHero
