import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
let screen = Dimensions.get('screen');

export const widthSize = screen.width;
export const heightSize = screen.height;

export const gapSize = moderateScale(16);

export const titleStyle = {
  fontSize: moderateScale(16),
  color: '#1c1c1c',
  fontWeight: '600',
};

export const subtitleStyle = {
  fontSize: moderateScale(14),
  color: '#494949',
  fontWeight: '400',
};

export const tertiertitleStyle = {
  fontSize: moderateScale(12),
  color: '#494949',
  fontWeight: '300',
};
