import { createStackNavigator } from '@react-navigation/stack'
import CollectionsScreen from './CollectionsScreen'
import CollectionNavigator from './CollectionNavigator'

const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Collections"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="CollectionsScreen" component={CollectionsScreen} />
            <Stack.Screen name="CollectionNavigator" component={CollectionNavigator} />
        </Stack.Navigator>
    )
}

export default HomeNavigator
