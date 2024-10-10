import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import FeedItem from '../components/FeedItem';
import mockFeedData from '../mockData/feeds';

const FeedScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={mockFeedData}
                renderItem={({ item }) => <FeedItem item={item} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default FeedScreen;
