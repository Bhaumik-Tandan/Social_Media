// UserInfo.tsx
import ImageSize from 'app/constants/imageSize';
import { getFontSizeByWindowWidth } from 'app/helper/res';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularImage from './CircularImage';

const FeedUserInfo = ({ profilePicture, username }) => (
    <View style={styles.userInfo}>
        <CircularImage size={ImageSize.SMALL} uri={profilePicture} />
        <Text style={styles.username}>{username}</Text>
    </View>
);

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        fontSize: getFontSizeByWindowWidth(16),
        fontWeight: 'bold',
    },
});

export default FeedUserInfo;
