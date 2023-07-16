import { FlatList, Text, View } from 'react-native';
import { CButton } from '../../components';
import { StyleSheet } from 'react-native';
import { Ionicons } from '../../icons';
import { useEffect, useState } from 'react';
import Animated, {
  Easing,
  WithTimingConfig,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MealCard, { MealCardProps } from '../../components/MealCard';
import { CONTENT_WIDTH, SCREEN_PADDING_LEFT } from '../../constants/styles/screen';

export type FavouriteAccordionProps = {
  title: string;
  data: Omit<MealCardProps, 'onPress'>[];
  open?: boolean;
};

const FavouriteAccordion = ({ title, data, open = false }: FavouriteAccordionProps) => {
  const height = useSharedValue(0);

  const [expand, setExpand] = useState(false);

  const config: WithTimingConfig = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, config),
      minHeight: withTiming(height.value, config),
    };
  });

  const expandAccordion = () => {
    setExpand((o) => {
      let toExpand = o;
      toExpand = !o;
      if (toExpand) {
        height.value = 300;
      } else {
        height.value = 0;
      }
      return toExpand;
    });
  };

  useEffect(() => {
    if (open) {
      height.value = 300;
      setExpand(open);
    }
  }, [open]);

  return (
    <View style={styles.accordion}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CButton
          onPress={() => expandAccordion()}
          style={{
            button: styles.accordion__button,
          }}
        >
          <>
            <View style={styles.list__item}>
              <Text style={styles.list__item__category$$name}>{title}</Text>
              <Text style={styles.list__item__category__meals$$amount}>
                {data ? data.length : 0}
              </Text>
            </View>
            <Ionicons name={expand ? 'chevron-up-outline' : 'chevron-down-outline'} size={25} />
          </>
        </CButton>
      </View>
      <Animated.View style={[animatedStyle]}>
        <FlatList
          data={data}
          renderItem={({ item }) => <MealCard {...item} />}
          horizontal
          style={[
            {
              flex: 1,
            },
          ]}
          contentContainerStyle={[
            {
              gap: 10,
              paddingVertical: 15,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              paddingLeft: SCREEN_PADDING_LEFT,
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  list__item: {
    gap: 7,
    flexDirection: 'row',
  },
  list__item__category$$name: {
    fontSize: 25,
    fontWeight: '500',
    flexDirection: 'row',
    position: 'relative',
  },
  list__item__category__meals$$amount: {
    fontSize: 19,
    color: '#64748b',
  },
  accordion__button: {
    flexDirection: 'row',
    width: CONTENT_WIDTH,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#cbd5e1',
    paddingBottom: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  accordion: {
    flexDirection: 'column',
    flex: 1,
  },
  accordion__content: {
    flexGrow: 1,
    // backgroundColor: 'red',
  },
});

export default FavouriteAccordion;
