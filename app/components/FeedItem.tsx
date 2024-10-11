// FeedItem.tsx
import LikeButton from 'app/components/LikeButton';
import FeedProps from 'app/types/pages/FeedProps';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { calcHeight, getFontSizeByWindowWidth } from '../helper/res';
import FeedImage from './FeedImage';
import FeedUserInfo from './FeedUserInfo';
import PostDate from './PostDate';
const FeedItem = ({ item }: { item: FeedProps }) => {
    const [liked, setLiked] = React.useState(false);
    const [heartVisible, setHeartVisible] = React.useState(false);
    const heartScale = React.useRef(new Animated.Value(0)).current;

    const handleDoubleTap = () => {
        if (liked) return;
        setLiked(true);
        setHeartVisible(true);
        Animated.sequence([
            Animated.timing(heartScale, {
                toValue: 1.5,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(heartScale, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setHeartVisible(false);
        });
    };

    return (
        <View style={styles.feedItemContainer}>
            <FeedUserInfo profilePicture={item.profilePicture} username={item.username} />
            <FeedImage images={item.images} heartVisible={heartVisible} heartScale={heartScale} onDoubleTap={handleDoubleTap} />
            <Text style={styles.description}>{item.description}</Text>
            <LikeButton liked={liked} setLiked={setLiked} />
            <PostDate date={item.postDate} />
        </View>
    );
};

const styles = StyleSheet.create({
    feedItemContainer: {
        marginVertical: calcHeight(1),
        flexDirection: 'column',
        gap: calcHeight(1),
    },
    description: {
        fontSize: getFontSizeByWindowWidth(14),
    },
});

export default FeedItem;
