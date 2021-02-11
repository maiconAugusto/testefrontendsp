import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loading = ({color, size, style}) => {
  return <ActivityIndicator color={color} size={size} style={{...style}} />;
};
export default Loading;
