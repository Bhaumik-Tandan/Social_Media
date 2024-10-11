import AntDesign from '@expo/vector-icons/AntDesign';
import LikeButton from 'app/components/LikeButton';
import { calcHeight, calcWidth, getFontSizeByWindowWidth } from 'app/helper/res';
import FeedProps from 'app/types/pages/FeedProps';
import React from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';

const FeedItem = ({ item }: { item: FeedProps }) => {
    const [liked, setLiked] = React.useState(false);
    const [heartVisible, setHeartVisible] = React.useState(false);
    const heartScale = React.useRef(new Animated.Value(0)).current; // For heart animation

    const handleDoubleTap = () => {
        if (liked) return; // Prevent double tap if already liked
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
            setHeartVisible(false); // Hide heart after animation completes
        });
    };

    return (
        <View style={styles.feedItemContainer}>
            <View style={styles.userInfo}>
                <Image style={styles.avatar} source={{ uri: item.profilePicture }} />
                <Text style={styles.username}>{item.username}</Text>
            </View>
            <GestureHandlerRootView>
                <TapGestureHandler
                    onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === 4) {
                            // 4 indicates the state of "active"
                            handleDoubleTap();
                        }
                    }}
                    numberOfTaps={2}
                >
                    <View style={styles.imageContainer}>
                        <Image style={styles.carouselImage} source={{ uri: item.images[0] }} />
                        {heartVisible && (
                            <Animated.View style={[styles.heartContainer, { transform: [{ scale: heartScale }] }]}>
                                <AntDesign name="heart" size={calcWidth(30)} color="red" />
                            </Animated.View>
                        )}
                    </View>
                </TapGestureHandler>
            </GestureHandlerRootView>

            <Text style={styles.description}>{item.description}</Text>

            <LikeButton liked={liked} setLiked={setLiked} />

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
    imageContainer: {
        position: 'relative',
    },
    carouselImage: {
        flex: 1,
        aspectRatio: 1,
    },
    heartContainer: {
        position: 'absolute',
        top: '30%',
        left: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    heart: {
        fontSize: getFontSizeByWindowWidth(50), // Adjust heart size
    },
    description: {
        fontSize: getFontSizeByWindowWidth(14),
    },
    postDate: {
        fontSize: getFontSizeByWindowWidth(12),
    },
});

export default FeedItem;
