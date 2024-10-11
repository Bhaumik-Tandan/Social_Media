// HeartAnimation.tsx
import { useEffect } from 'react';
import { Animated } from 'react-native';

const HeartAnimation = ({ heartVisible, heartScale }) => {
    useEffect(() => {
        if (heartVisible) {
            Animated.sequence([
                Animated.timing(heartScale, {
                    toValue: 1.5,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(heartScale, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [heartVisible, heartScale]);

    return null; // This component does not render anything directly
};

export default HeartAnimation;
