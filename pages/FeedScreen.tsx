import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import mockFeedData from '../mockData/feeds';

const FeedItem = ({ item }) => {
    const [liked, setLiked] = useState(item.liked);


    return (
        <View style={styles.feedItemContainer}>
            {/* User Info */}
            <View style={styles.userInfo}>
                <Image
                    style={styles.avatar}
                    source={{ uri: item.avatar }}
                />
                <Text style={styles.username}>{item.username}</Text>
            </View>

            {/* Image Carousel */}
            <Text>vsd</Text>

            {/* Post Description */}
            <Text style={styles.description}>{item.description}</Text>

            {/* Like Button */}
            <TouchableOpacity onPress={() => setLiked(!liked)}>
                <Text style={styles.likeButton}>
                    {liked ? 'Unlike' : 'Like'}
                </Text>
            </TouchableOpacity>

            {/* Post Date */}
            <Text style={styles.postDate}>{item.postDate}</Text>
        </View>
    );
};

const FeedScreen = () => {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        setFeeds(mockFeedData);
    }, []);

    const renderFeedItem = ({ item }) => <FeedItem item={item} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={feeds}
                renderItem={renderFeedItem}
                keyExtractor={(item) => item.id}
                onEndReached={() => {
                    console.log('End reached');
                }}
                onEndReachedThreshold={0.5}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    feedItemContainer: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    carouselImage: {
        width: 400,
        height: 250,
        borderRadius: 8,
    },
    description: {
        marginVertical: 10,
        fontSize: 14,
    },
    likeButton: {
        color: '#007BFF',
        marginVertical: 5,
        fontSize: 16,
    },
    postDate: {
        color: '#999',
        fontSize: 12,
    },
});

export default FeedScreen;
