import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PAGES from '../constants/pages';
import CreatePostScreen from '../pages/CreatePostScreen';
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer
        >
            <Stack.Navigator
            >
                <Stack.Group>
                    <Stack.Screen
                    component={CreatePostScreen}
                    name={PAGES.CREATE_POST}
                      />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
