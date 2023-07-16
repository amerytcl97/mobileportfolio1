import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SCREEN_STYLE } from '../constants/styles/screen';

export type ContentProps = {
  center?: boolean;
  paddingLeft?: boolean;
  paddingRight?: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Content = ({ children, center = true, paddingLeft, paddingRight, style }: ContentProps) => {
  return (
    <View
      style={[
        center ? SCREEN_STYLE.SCREEN__CENTER : {},
        paddingLeft ? SCREEN_STYLE.SCREEN__PADDING_LEFT : {},
        paddingRight ? SCREEN_STYLE.SCREEN__PADDING_RIGHT : {},
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Content;
