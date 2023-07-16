import { StyleSheet, Text, View } from "react-native";
import { BORDER_RADIUS_FULL } from "../../constants/styles";

type ChipSizes = {
  sm: number;
};

type ChipProps = {
  title: string;
  roundness?: number;
};

const Chip = ({ title, roundness = BORDER_RADIUS_FULL }: ChipProps) => {
  const style = styleWithParams(roundness);
  return (
    <View style={style.chip}>
      <Text style={style.chip__text}>{title}</Text>
    </View>
  );
};

const styleWithParams = (roundness?: number) =>
  StyleSheet.create({
    chip: {
      borderRadius: roundness,
    },
    chip__text: {},
  });

export default Chip;
