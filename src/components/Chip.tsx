import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import CButton from './Elements/CButton';
import { BORDER_RADIUS_FULL } from '../constants/styles';
import { BlurView } from 'expo-blur';

type ChipSize = {
  sm: {
    width: number | string;
  };
  md: {
    height: number | string;
    width: number | string;
  };

  lg: {
    height: number | string;
    width: number | string;
  };
};

const sizes: ChipSize = {
  sm: {
    width: '100%',
  },
  md: {
    height: 25,
    width: 25,
  },
  lg: {
    height: 32,
    width: 32,
  },
};

type ChipProps = {
  title: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isActive?: boolean;
} & {
  size?: keyof typeof sizes;
};

const Chip = ({
  title,
  onPress = () => {},
  size = 'sm',
  textStyle,
  containerStyle,
  isActive = false,
}: ChipProps) => {
  return (
    <CButton onPress={onPress}>
      <View style={[style.chip, isActive && style.chip__active, containerStyle]}>
        <Text
          style={[
            style.chip__text,
            isActive && style.chip__text__active,
            size === 'sm' ? style.chip__text$$size$$sm : null,
            textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </CButton>
  );
};

const style = StyleSheet.create({
  chip: {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_FULL,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  chip__active: {
    backgroundColor: 'black',
  },
  chip__text: {
    fontWeight: '500',
  },
  chip__text__active: {
    color: 'white',
    fontWeight: '500',
  },
  chip__size$$sm: {
    // height: sizes.sm.minHeight,
    width: sizes.sm.width,
  },
  chip__size$$md: {
    height: sizes.md.height,
    width: sizes.md.width,
  },
  chip__size$$lg: {
    height: sizes.lg.height,
    width: sizes.lg.width,
  },
  chip__text$$size$$sm: {
    fontSize: 20,
  },
});

export default Chip;
