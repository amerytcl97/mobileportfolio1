import { StyleSheet, Text, View } from "react-native";
import { CButton } from "../../components";
import { useState } from "react";

export type InstructionsProps = {
  instruction: string;
  numberOfLines?: number;
};

const Instructions = ({ instruction, numberOfLines = 0 }: InstructionsProps) => {
  const [seeMore, setSetMore] = useState<boolean>(false);

  return (
    <View style={style.instruction}>
      <Text
        numberOfLines={seeMore ? 0 : numberOfLines}
        style={style.instruction__text}
      >
        {instruction}
      </Text>
      <CButton
        title={seeMore ? "Hide" : "See more"}
        onPress={() => setSetMore((o) => !o)}
        style={{
          button: {
            marginVertical: 10,
          },
          text: {
            fontSize: 18,
            fontWeight: "500",
            color: "blue",
          },
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  instruction: {
    position: "relative",
    padding: 20,
    justifyContent: "center",
    gap: 5,
    // height: "100%",
  },
  instruction__text: {
    fontSize: 16,
    lineHeight: 19,
  },
  instruction__seemore__block: {
    // position: "absolute",
  },
});

export default Instructions;
