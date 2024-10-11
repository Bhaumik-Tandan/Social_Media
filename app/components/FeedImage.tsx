// FeedImage.tsx
import AntDesign from '@expo/vector-icons/AntDesign';
import COLOR from 'app/constants/color';
import { calcWidth } from 'app/helper/res';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';
import CarouselComponent from './Carousel';

const FeedImage = ({ images, heartVisible, heartScale, onDoubleTap }) => (
    <GestureHandlerRootView>
        <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
            <View style={styles.imageContainer}>
                {/* <Image style={styles.carouselImage} source={{ uri: images[0] }} />
                 */}
                <CarouselComponent images={images} />
                {heartVisible && (
                    <Animated.View style={[styles.heartContainer, { transform: [{ scale: heartScale }] }]}>
                        <AntDesign name="heart" size={calcWidth(30)} color={COLOR.HEART} />
                    </Animated.View>
                )}
            </View>
        </TapGestureHandler>
    </GestureHandlerRootView>
);

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
    },
    carouselImage: {
        flex: 1,
        aspectRatio: 1,
    },
    heartContainer: {
        position: 'absolute',
        top: '30%',
        left: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
});

export default FeedImage;
