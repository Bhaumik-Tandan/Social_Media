import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import mockProfileData from 'mockData/profile';
import ImageGrid from '../components/ImageGrid';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={{ uri: mockProfileData.profilePicture }} style={styles.profilePicture} />
                <View style={styles.userInfo}>
                    <Text style={styles.username}>{mockProfileData.username}</Text>
                    <Text style={styles.bio}>{mockProfileData.bio}</Text>
                    <View style={styles.followInfo}>
                        <Text style={styles.followCount}>{mockProfileData.followers} Followers</Text>
                        <Text style={styles.followCount}>{mockProfileData.posts.length} Posts</Text>
                    </View>
                </View>
            </View>
            <ImageGrid images={mockProfileData.posts.map((post) => post.imageUrl)} />
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
        width: 100,
        height: 100,
        borderRadius: 50,
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
        gap: 20,
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
