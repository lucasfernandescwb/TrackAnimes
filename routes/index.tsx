import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';

import Details from '../screens/Details';

const Stack = createNativeStackNavigator()

export const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#20232A' }, headerTitleAlign: 'center', animation: 'slide_from_right', headerTintColor: 'white' }}>
                <Stack.Screen name='Home' component={Home} />

                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
