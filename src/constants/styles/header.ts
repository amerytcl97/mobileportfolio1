import { StyleSheet } from 'react-native';
import { SCREEN_PADDING_LEFT, SCREEN_PADDING_RIGHT, SCREEN_STYLE } from './screen';

export const HEADER__STYLE = StyleSheet.create({
  HEADER: {
    height: '10%',
    paddingLeft: SCREEN_PADDING_LEFT,
    paddingRight: SCREEN_PADDING_RIGHT,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
