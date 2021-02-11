import React from 'react';
import {Button} from 'react-native-paper';

const ButtonComponent = ({
  data,
  style,
  labelStyle,
  uppercase,
  contentStyle,
  mode,
  color,
  onPress,
  disabled,
  action,
}) => {
  return (
    <Button
      disabled={disabled === undefined ? false : disabled}
      color={color}
      style={style}
      uppercase={uppercase}
      contentStyle={contentStyle}
      mode={mode}
      onPress={action === undefined ? onPress : action}
      labelStyle={labelStyle}>
      {data}
    </Button>
  );
};
export default ButtonComponent;
