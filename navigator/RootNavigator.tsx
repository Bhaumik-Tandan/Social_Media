import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PAGES from '../constants/pages';
import ProfileScreen from '../pages/ProfileScreen';
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer
        >
            <Stack.Navigator
            >
                <Stack.Group>
                    <Stack.Screen
                    component={ProfileScreen}
                    name={PAGES.PROFILE}
                      />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
