import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedHeader from 'app/components/FeedHeader';
import PAGES from 'app/constants/pages';
import CreatePostScreen from 'app/pages/CreatePostScreen';
import FeedScreen from 'app/pages/FeedScreen';
import ProfileScreen from 'app/pages/ProfileScreen';
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={FeedScreen} name={PAGES.FEED}
                 options={{ header: (props) => <FeedHeader/> }}
                />
                <Stack.Screen name={PAGES.CREATE_POST} component={CreatePostScreen} />
                <Stack.Screen name={PAGES.PROFILE} component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
