import { calcWidth } from 'app/helper/res';
import CircularImageProps from 'app/types/components/CircularImage';
import React from 'react';
import { Image } from 'react-native';

const CircularImage= ({size,uri}:CircularImageProps) => {
    return (
          <Image source={{uri}} style={{
            width:calcWidth(size),
            aspectRatio:1,
            borderRadius:calcWidth(size)/2,
          }} />
    )

};



export default CircularImage;
