import { createStackNavigator } from '@react-navigation/stack'
import CollectionScreen from './CollectionScreen'
import NFTDetailScreen from './NFTDetailScreen'

const Stack = createStackNavigator()

const CollectionNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CollectionScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
            <Stack.Screen name="NFTDetailScreen" component={NFTDetailScreen} />
        </Stack.Navigator>
    )
}

export default CollectionNavigator
