/* eslint-disable react/prop-types */
import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from './styles/GeneralStatusBarColorStyle';

const GeneralStatusBarColor = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default GeneralStatusBarColor;
