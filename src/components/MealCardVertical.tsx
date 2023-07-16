import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import {
  BORDER_RADIUS_FULL,
  BORDER_RADIUS_MD,
  DANGER_THEME,
  FONTSIZE_MD,
  MAIN_THEME,
  NEUTRAL_THEME,
} from '../constants/styles';
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from '../icons';
import CButton from './Elements/CButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NavigationScreenProps, RootStackParamList } from '../../App';
import { CookedMeal } from '../stores/cooked';

type MealCardVerticalProps = CookedMeal & {
  onDelete?: (idMeal: string) => void;
};

const MealCardVertical = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
  rating,
  onDelete = () => {},
}: MealCardVerticalProps) => {
  //   const removeFavouriteItem = useFavouriteStore((state) => state.removeFavouriteItem);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderRightActions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          //   paddingRight: 25,
          paddingLeft: 20,
        }}
      >
        <CButton
          onPress={() =>
            navigation.navigate('Meal', {
              idMeal,
            })
          }
          style={{
            button: {
              backgroundColor: NEUTRAL_THEME,
              borderRadius: BORDER_RADIUS_FULL,
              padding: 10,
            },
          }}
        >
          <Ionicons name="eye-outline" size={30} />
        </CButton>
        <CButton
          onPress={() => onDelete(idMeal)}
          style={{
            button: {
              backgroundColor: DANGER_THEME,
              borderRadius: BORDER_RADIUS_FULL,
              padding: 10,
            },
          }}
        >
          <Ionicons name="trash-outline" size={30} color="#ef4444" />
        </CButton>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={() => renderRightActions()} overshootRight overshootFriction={4}>
      <View style={style.card}>
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 60,
            gap: 10,
            marginTop: 5,
            // flexGrow: 1,
          }}
        >
          <Text
            style={{
              color: '#64748b',
              fontWeight: '400',
            }}
          >
            {rating ? rating : 'Not rated'}
          </Text>
          <Ionicons name="star" color="#facc15" size={15} />
        </View>
        <Image source={`${strMealThumb}/preview`} style={style.card$$image} />
        <View style={style.card__title$$wrapper}>
          <Text numberOfLines={1} style={style.card__title}>
            {strMeal}
          </Text>
          <Text style={style.card__subtitle}>{strCategory}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 20,
    borderRadius: BORDER_RADIUS_MD,
    position: 'relative',
  },
  card$$image: {
    height: 85,
    width: 85,
    borderRadius: BORDER_RADIUS_FULL,
  },
  card__title$$wrapper: {
    gap: 5,
    justifyContent: 'center',
    width: '100%',
  },
  card__title: {
    fontSize: FONTSIZE_MD,
    fontWeight: '600',
  },
  card__subtitle: {
    color: MAIN_THEME,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MealCardVertical;
