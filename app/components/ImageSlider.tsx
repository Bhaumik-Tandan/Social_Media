import React, { useRef, useState } from 'react';
import { Image, NativeScrollEvent, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, View } from 'react-native';

const SLIDER_CONTAINER_WIDTH = 300; // Adjust this to your desired width
const Opacity = {
    opaque: 1,
    transparent: 0.5,
};

const styles = StyleSheet.create({
    container: {
        width: SLIDER_CONTAINER_WIDTH,
    },
    scrollViewCont: {
        position: 'relative',
    },
    dotCont: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        backgroundColor: 'gray',
    },
    image: {
        width: SLIDER_CONTAINER_WIDTH,
        height: 200, // Adjust height as needed
        resizeMode: 'cover',
    },
});

interface ImageSliderProps {
    images: string[]; // Array of image URLs
}

function ImageSlider({ images }: ImageSliderProps) {
    const scrollRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotPress = (index: number) => {
        setCurrentIndex(index);
        scrollRef.current?.scrollTo({
            x: SLIDER_CONTAINER_WIDTH * index,
            y: 0,
            animated: true,
        });
    };

    const setSelectedIndex = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset } = event.nativeEvent;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
        setCurrentIndex(selectedIndex);
    };

    return images.length === 0 ? null : (
        <View style={styles.container}>
            <View style={styles.scrollViewCont}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={setSelectedIndex}
                    ref={scrollRef}
                >
                    {images.map((imageUrl, index) => (
                        <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
                    ))}
                </ScrollView>

                {/* Dots */}
                <View style={styles.dotCont}>
                    {images.length > 1 &&
                        images.map((_, i) => (
                            <Pressable onPress={() => handleDotPress(i)} key={i}>
                                <View
                                    style={{
                                        ...styles.dot,
                                        opacity: i === currentIndex ? Opacity.opaque : Opacity.transparent,
                                    }}
                                />
                            </Pressable>
                        ))}
                </View>
            </View>
        </View>
    );
}

export default ImageSlider;
