import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { BORDER_RADIUS_LG, BORDER_RADIUS_MD, BORDER_RADIUS_SM } from "../../constants/styles/borderRadius";
import { SCREEN_PADDING_LEFT } from "../../constants/styles/screen";

type WrapperProps = {
  title: string;
  children: ReactNode;
  childrenContainerStyle?: StyleProp<ViewStyle>;
};

const Wrapper = ({ title, children, childrenContainerStyle }: WrapperProps) => {
  return (
    <View style={style.wrapper}>
      <Text style={style.wrapper__title}>{title}</Text>
      <View style={[style.wrapper__container, childrenContainerStyle]}>{children}</View>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    width: "100%",
    gap: 10,
  },
  wrapper__title: {
    fontSize: 20,
    fontWeight: "600",
  },
  wrapper__container: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: BORDER_RADIUS_MD,
  },
});

export default Wrapper;
