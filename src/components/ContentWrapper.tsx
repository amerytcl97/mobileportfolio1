import { StyleSheet, Text, View } from "react-native";
import { BORDER_RADIUS_MD } from "../constants/styles";
import { ReactNode } from "react";

export type ContentWrapperProps = {
  title: string;
  children: ReactNode;
};

const ContentWrapper = ({ title, children }: ContentWrapperProps) => {
  return (
    <View style={style.wrapper}>
      <Text style={style.wrapper__title}>{title}</Text>
      <View style={style.wrapper__container}>{children}</View>
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
export default ContentWrapper;
