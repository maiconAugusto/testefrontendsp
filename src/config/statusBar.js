import {Dimensions, Platform} from 'react-native';

export default function isIphoneX() {
  const dim = Dimensions.get('window');
  const size =
    Platform.OS === 'ios' && (isIPhoneXSize(dim) || isIPhoneXrSize(dim));

  if (size) {
    return 100;
  } else {
    return 80;
  }
}

function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}

function isIPhoneXrSize(dim) {
  return dim.height === 896 || dim.width === 896;
}
