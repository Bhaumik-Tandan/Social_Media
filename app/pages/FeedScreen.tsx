import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import mockFeedData from '../../mockData/feeds';
import FeedItem from '../components/FeedItem';
import { calcWidth } from '../helper/res';

const FeedScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={mockFeedData}
                renderItem={({ item }) => <FeedItem item={item} />}
                keyExtractor={(item) => item.id}
                initialNumToRender={10} 
                maxToRenderPerBatch={5} 
                windowSize={5} 
                removeClippedSubviews={true}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: calcWidth(2),
    },
});

export default FeedScreen;
