import { ReactElement } from "react";
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";

export type CButtonProps = {
  title?: string;
  onPress?: () => void;
  style?: {
    button?: StyleProp<ViewStyle>;
    text?: StyleProp<TextStyle>;
  };
  children?: ReactElement;
};

const CButton = (props: CButtonProps) => {
  const { title, onPress, style, children } = props;
  return (
    <Pressable
      onPress={onPress}
      style={style?.button}
    >
      {typeof children !== "undefined" ? children : <Text style={style?.text}>{title}</Text>}
    </Pressable>
  );
};

// const styles = StyleSheet.create({ ...style });

export default CButton;
