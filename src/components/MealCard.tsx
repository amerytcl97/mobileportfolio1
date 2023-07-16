import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import { Meal } from '../types';
import { BORDER_RADIUS_LG, BORDER_RADIUS_MD } from '../constants/styles';
import { memo } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { FONTSIZE_XL } from '../constants/styles/fontSize';
import { BlurView } from 'expo-blur';
import FavouriteButton from './FavouriteButton';
import { useFavouriteStore } from '../stores';

export type MealCardProps = Pick<Meal, 'idMeal' | 'strCategory' | 'strMeal' | 'strMealThumb'> & {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const MealCard = ({
  strMeal,
  strMealThumb,
  idMeal,
  onPress,
  strCategory,
  style: customStyle,
}: MealCardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { isMealFavourited, addToFavourites } = useFavouriteStore();

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Meal', {
          idMeal: idMeal,
        })
      }
      style={[style.card, customStyle]}
    >
      <Image
        source={`${strMealThumb}`}
        placeholder={blurhash}
        contentFit="cover"
        transition={500}
        style={style.card$$image}
        // blurRadius={0.1}
      />
      <FavouriteButton
        isFavourite={isMealFavourited(strCategory, idMeal)}
        onPress={() =>
          addToFavourites({
            idMeal: idMeal,
            strMeal: strMeal,
            strCategory: strCategory,
            strMealThumb: strMealThumb,
          })
        }
        style={{
          button: {
            position: 'absolute',
            top: 0,
            right: 0,
            marginRight: '3%',
            marginTop: '5%',
          },
        }}
      />
      <BlurView style={style.card$$title__wrapper} intensity={10} tint="dark">
        <Text style={style.card$$title} numberOfLines={2}>
          {strMeal}
        </Text>
      </BlurView>
    </Pressable>
  );
};

const style = StyleSheet.create({
  card: {
    position: 'relative',
    height: '100%',
    width: 250,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: BORDER_RADIUS_LG,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  card$$image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: BORDER_RADIUS_LG,
  },
  card$$title__wrapper: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    width: '100%',
    borderTopRightRadius: BORDER_RADIUS_MD,
    borderTopLeftRadius: BORDER_RADIUS_MD,
    borderBottomRightRadius: BORDER_RADIUS_MD,
    paddingTop: '5%',
    paddingBottom: '10%',
    paddingHorizontal: '5%',
    alignItems: 'flex-end',
    // gap: 10,
  },
  card$$title: {
    fontSize: FONTSIZE_XL,
    fontWeight: '600',
    color: '#f1f5f9',
    flexGrow: 1,
  },
});

export default memo(MealCard);
