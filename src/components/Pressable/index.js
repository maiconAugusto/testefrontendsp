import React from 'react';
import {Pressable} from 'react-native';
import Text from '../Text';

const PressableComponent = ({data, onPress, style}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={style} data={data} />
    </Pressable>
  );
};
export default PressableComponent;
