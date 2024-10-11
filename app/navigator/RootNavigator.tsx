import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PAGES from '../constants/pages';
import FeedScreen from '../pages/FeedScreen';
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer
        >
            <Stack.Navigator
            >
                <Stack.Group>
                    <Stack.Screen
                    component={FeedScreen}
                    name={PAGES.FEED}
                      />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
