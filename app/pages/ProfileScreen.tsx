import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CircularImage from 'app/components/CircularImage';
import ImageGrid from 'app/components/ImageGrid';
import ImageSize from 'app/constants/imageSize';
import { calcHeight, calcWidth } from 'app/helper/res';
import mockProfileData from 'mockData/profile';

const ProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHeader}>
                 <CircularImage size={ImageSize.LARGE} uri={mockProfileData.profilePicture} />
                <View>
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
        padding: calcHeight(2),
        justifyContent: 'space-between',
        marginHorizontal: calcWidth(5),
        alignItems: 'center',
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
});

export default ProfileScreen;
