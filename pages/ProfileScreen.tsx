import React from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import mockProfileData from '../mockData/profile';

const ProfileScreen = () => {
    // Sample data
    const userProfile = {
        username: 'john_doe',
        bio: 'Lover of nature and photography.📸',
        profilePicture: 'https://example.com/path/to/profile_picture.jpg', // Replace with your image URL
        followers: 120,
        posts: 45,
        images: [
            // Sample images for posts
            'https://example.com/path/to/post_image1.jpg',
            'https://example.com/path/to/post_image2.jpg',
            'https://example.com/path/to/post_image3.jpg',
            'https://example.com/path/to/post_image4.jpg',
            'https://example.com/path/to/post_image5.jpg',
            'https://example.com/path/to/post_image6.jpg',
        ],
    };

    const renderPostItem = ({ item }) => (
        <View style={styles.postContainer}>
            <Image source={{ uri: item }} style={styles.postImage} />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: mockProfileData.profilePicture }}
                    style={styles.profilePicture}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.username}>{userProfile.username}</Text>
                    <Text style={styles.bio}>{userProfile.bio}</Text>
                    <View style={styles.followInfo}>
                        <Text style={styles.followCount}>{userProfile.followers} Followers</Text>
                        <Text style={styles.followCount}>{userProfile.posts} Posts</Text>
                    </View>
                </View>
            </View>
            <FlatList
                data={userProfile.images}
                renderItem={renderPostItem}
                keyExtractor={(item) => item}
                numColumns={3}
                contentContainerStyle={styles.postGrid}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileHeader: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    userInfo: {
        flex: 1,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 14,
        color: '#666',
        marginVertical: 4,
    },
    followInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    followCount: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    postGrid: {
        padding: 10,
    },
    postContainer: {
        flex: 1,
        margin: 5,
    },
    postImage: {
        width: '100%',
        height: 120, // Adjust height as needed
        borderRadius: 8,
    },
});

export default ProfileScreen;
