import {StyleSheet, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

let STATUSBAR_HEIGHT = 0;
if (getStatusBarHeight() > 20) {
  STATUSBAR_HEIGHT =
    Platform.OS === 'ios' ? getStatusBarHeight() + 15 : StatusBar.currentHeight;
} else {
  STATUSBAR_HEIGHT =
    Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
}

export default StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
