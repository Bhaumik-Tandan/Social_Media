// PostDate.tsx
import { getFontSizeByWindowWidth } from 'app/helper/res';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const PostDate = ({ date }) => (
    <Text style={styles.postDate}>{date}</Text>
);

const styles = StyleSheet.create({
    postDate: {
        fontSize: getFontSizeByWindowWidth(12),
    },
});

export default PostDate;
