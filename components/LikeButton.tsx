import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { calcWidth } from '../helper/res';

const LikeButton = ({liked,setLiked}:{liked:boolean,setLiked:React.Dispatch<React.SetStateAction<boolean>>}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleLikePress = () => {
    setLiked(!liked);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleLikePress}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          {liked ? (
            <AntDesign name="heart" size={calcWidth(5)} color="red" />
          ) : (
            <AntDesign name="hearto" size={calcWidth(5)} color="black" />
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LikeButton;
