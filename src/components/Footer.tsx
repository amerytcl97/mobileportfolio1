import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SCREEN_STYLE } from "../constants/styles/screen";
import { ReactNode } from "react";
import { SECONDARY_THEME } from "../constants/styles";
import { SCREEN_BACKGROUND_THEME } from "../constants/styles/color";

type Footer = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Footer = ({ children, ...props }: Footer) => {
  return <View style={[SCREEN_STYLE.SCREEN__FOOTER, style.footer, props.style]}>{children}</View>;
};

const style = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "inherit",

    // height: "100%",
  },
});

export default Footer;
