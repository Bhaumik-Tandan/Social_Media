import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../pages/SignUpScreen';
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer
        >
            <Stack.Navigator
            >
                <Stack.Group>
                    <Stack.Screen
                    component={SignUpScreen}
                    name='ex'
                      />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
