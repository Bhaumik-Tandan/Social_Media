import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// Get device width for responsive design
const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / numColumns; // Divide width by 3 for equal size

const ImageGrid = ({ images }) => {
    // Render each image in the grid
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
        </View>
    );

    return <FlatList data={images} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} numColumns={numColumns} />;
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        margin: 1,
    },
    image: {
        width: imageSize - 2, // Reduce by margin
        height: imageSize - 2,
    },
});

export default ImageGrid;
