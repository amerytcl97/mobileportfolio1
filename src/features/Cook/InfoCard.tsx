import { ReactNode, useState } from 'react';
import { ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { BORDER_RADIUS_MD } from '../../constants/styles';
import { CButton } from '../../components';
import { Ionicons } from '../../icons';
import { SCREEN_PADDING_LEFT, SCREEN_PADDING_RIGHT } from '../../constants/styles/screen';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type InfoCardProps = {
  title: string;
  children: ReactNode;
  expandable?: boolean;
  animate?: {
    fromHeight: number;
    toHeight: number;
    fromBottom: number;
    toBottom: number;
  };
  style?: StyleProp<ViewStyle> | undefined;
};

const InfoCard = ({
  title,
  children,
  expandable = true,
  style: customStyle,
  animate,
}: InfoCardProps) => {
  const height = useSharedValue(animate?.fromHeight);
  const bottom = useSharedValue(animate?.fromBottom || 0);
  const [expand, setExpand] = useState<boolean>(false);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(`${height.value}%`, config),
      bottom: withTiming(bottom.value, config),
    };
  });

  return (
    <Animated.View
      style={[
        style.info$$card,
        (() => {
          if (expand) {
            height.value = animate?.toHeight;
            bottom.value = animate?.toBottom!;
          } else {
            height.value = animate?.fromHeight;
            bottom.value = animate?.fromBottom!;
          }
          return animatedStyle;
        })(),
        customStyle,
      ]}
    >
      <View style={style.info$$card__header}>
        {title && <Text style={style.info$$card__header$$title}>{title}</Text>}
        {expandable && (
          <CButton onPress={() => setExpand((o) => !o)}>
            <Ionicons name={expand ? 'chevron-down-outline' : 'chevron-up-outline'} size={25} />
          </CButton>
        )}
      </View>
      <ScrollView
        bounces={false}
        style={{
          // height: '100%',
          width: '100%',
        }}
      >
        {children}
      </ScrollView>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  info$$card: {
    borderWidth: 0.2,
    borderTopLeftRadius: BORDER_RADIUS_MD,
    borderTopRightRadius: BORDER_RADIUS_MD,
    borderBottomWidth: 0,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  info$$card__header: {
    // width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: SCREEN_PADDING_LEFT,
    paddingRight: SCREEN_PADDING_RIGHT,
  },
  info$$card__header$$title: {
    fontSize: 25,
    fontWeight: '500',
    width: '100%',
    textAlign: 'left',
    marginBottom: 15,
  },
});

export default InfoCard;
