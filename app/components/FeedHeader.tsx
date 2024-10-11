import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import ImageSize from 'app/constants/imageSize';
import PAGES from 'app/constants/pages';
import { calcHeight, calcWidth } from 'app/helper/res';
import mockProfileData from 'mockData/profile';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import CircularImage from './CircularImage';

const FeedHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate(PAGES.CREATE_POST)}>
                <AntDesign name="pluscircle" size={calcWidth(10)} color="pink" />
            </Pressable>
            <Pressable onPress={() => navigation.navigate(PAGES.PROFILE)}>
                <CircularImage size={ImageSize.MEDIUM} uri={mockProfileData.profilePicture} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: calcHeight(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: calcWidth(4),
        marginTop: calcHeight(5),
    },
});

export default FeedHeader;
