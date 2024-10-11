import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from '../helper/res';
import FeedProps from '../types/FeedProps';
import LikeButton from './LikeButton';
const FeedItem = ({ item }: { item: FeedProps }) => {
    const [liked, setLiked] = React.useState(false);
    return (
        <View style={styles.feedItemContainer}>
            <View style={styles.userInfo}>
                <Image
                    style={styles.avatar}
                    source={{ uri: item.profilePicture }}
                />
                <Text style={styles.username}>{item.username}</Text>
            </View>
            <GestureHandlerRootView>
            <TapGestureHandler
            onHandlerStateChange={() => {
                setLiked(true);
            }}
              numberOfTaps={2}
            >
            <Image
                style={styles.carouselImage}
                source={{ uri: item.images[0] }}
            />
            </TapGestureHandler>
            </GestureHandlerRootView>

            <Text style={styles.description}>{item.description}</Text>

           <LikeButton liked={liked} setLiked={setLiked}/>

            <Text style={styles.postDate}>{item.postDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    feedItemContainer: {
        marginVertical: calcHeight(1),
        flexDirection: 'column',
        gap: calcHeight(1),
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: calcWidth(10),
        aspectRatio: 1,
        borderRadius: calcWidth(10),
    },
    username: {
        fontSize: getFontSizeByWindowWidth(16),
        fontWeight: 'bold',
    },
    carouselImage: {
        flex: 1,
        aspectRatio: 1,
    },
    description: {
        fontSize: getFontSizeByWindowWidth(14),
    },
    likeButton: {
        fontSize: getFontSizeByWindowWidth(16),
    },
    postDate: {
        fontSize: getFontSizeByWindowWidth(12),
    },
});

export default FeedItem;
