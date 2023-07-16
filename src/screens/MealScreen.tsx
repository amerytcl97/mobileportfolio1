import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../../App';
import {
  SCREEN_PADDING_LEFT,
  SCREEN_PADDING_RIGHT,
  SCREEN_STYLE,
} from '../constants/styles/screen';
import { BORDER_RADIUS_FULL, BORDER_RADIUS_MD } from '../constants/styles';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { getMeal } from '../api/meals';
import { Image } from 'expo-image';
import { useFavouriteStore } from '../stores';
import FavouriteButton from '../components/FavouriteButton';
import { useCookedMealsStore } from '../stores/cooked';
import { Meal } from '../types';
import BackButton from '../components/BackButton';
import { FONTSIZE_2XL } from '../constants/styles/fontSize';
import InfoCard from '../features/Cook/InfoCard';
import MiniInfo from '../features/Cook/MiniInfo';
import { CButton, Header, Spinner } from '../components';
import IngredientsList, { Ingredient } from '../features/Cook/IngredientsList';
import { Ionicons } from '../icons';
import RatingModal from '../components/RatingModal';
import { SafeAreaView } from 'react-native-safe-area-context';

const MealScreen = ({ navigation, route }: ScreenProps<'Meal'>) => {
  const { idMeal } = route.params;
  const { isMealFavourited, addToFavourites } = useFavouriteStore();
  const { addToCookedMeals } = useCookedMealsStore();

  const [meal, setMeal] = useState<Meal>();
  const [cookingStatus, setCookingStatus] = useState<'viewing' | 'cooking' | 'finished'>('viewing');
  const [openRatingModal, setOpenRatingModal] = useState(false);

  const isFavourited =
    (meal?.strCategory && meal?.idMeal && isMealFavourited(meal?.strCategory, meal?.idMeal)) ||
    false;

  const handleOnStartCooking = () => {
    switch (cookingStatus) {
      case 'viewing':
        setCookingStatus('cooking');
        break;
      case 'cooking':
        setCookingStatus('finished');
        meal &&
          addToCookedMeals({
            idMeal: meal.idMeal,
            strCategory: meal.strCategory,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
            rating: 0,
          });
        setOpenRatingModal(true);
        break;
      case 'finished':
        break;
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (navigation.isFocused()) {
      if (idMeal) {
        timeout = setTimeout(() => {
          (async () => {
            const mealDetails = await getMeal(idMeal);
            setMeal(mealDetails);
          })();
        }, 1000);
      }
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        setMeal(undefined);
        setCookingStatus('viewing');
      }
    };
  }, [idMeal]);

  if (!meal) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spinner />
      </SafeAreaView>
    );
  }

  return (
    <View style={[SCREEN_STYLE.SCREEN, SCREEN_STYLE.SCREEN__CENTER]}>
      <Header
        title={meal.strMeal}
        startButton={<BackButton />}
        endButton={
          <FavouriteButton
            isFavourite={isFavourited}
            onPress={() =>
              addToFavourites({
                idMeal: meal.idMeal,
                strMeal: meal.strMeal,
                strCategory: meal.strCategory,
                strMealThumb: meal.strMealThumb,
              })
            }
          />
        }
      />
      <View style={[SCREEN_STYLE.SCREEN__CONTENT, style.meal__head]}>
        <View style={style.meal__wrapper}>
          {/* <Text style={style.meal__title}>{meal?.strMeal}</Text> */}
          <View style={[style.meal__image$$container, SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL]}>
            {meal?.strMeal && <Image source={meal?.strMealThumb} style={style.meal__image} />}
          </View>
          <InfoCard
            title=""
            expandable={false}
            animate={{
              fromHeight: 55,
              toHeight: 100,
              fromBottom: 0,
              toBottom: 0,
            }}
            style={{
              position: 'relative',
              marginTop: 10,
              borderWidth: 0.5,
              marginBottom: 20,
            }}
          >
            <View style={style.meal__miniinfo}>
              <MiniInfo title="Country" content={meal?.strArea || 'None'} />
              <MiniInfo title="Related" content={meal?.strTags || 'None'} />
              <MiniInfo title="Category" content={meal?.strCategory || 'None'} />
            </View>
          </InfoCard>
          <InfoCard
            title="Ingredients"
            animate={{
              fromHeight: 35,
              toHeight: 100,
              fromBottom: 65,
              toBottom: 0,
            }}
            style={{
              borderWidth: 0,
              backgroundColor: '#e2e8f0',
              // bottom: 65,
            }}
          >
            <IngredientsList
              ingredients={(() => {
                const ingredients: Ingredient[] = [];
                for (const [key, value] of Object.entries(meal)) {
                  let ingredient: Ingredient = {
                    name: '',
                    measure: '',
                  };
                  if (key.includes('strIngredient')) {
                    ingredient.name = value || '';
                    const number = key.match(/\d+/g) || [];
                    ingredient.measure = number.length
                      ? meal[`strMeasure${number[0]}` as keyof Meal] || ''
                      : '';
                  }
                  if (ingredient.name) ingredients.push(ingredient);
                }
                return ingredients;
              })()}
            />
          </InfoCard>
          <InfoCard
            title="Instructions"
            animate={{
              fromHeight: 35,
              toHeight: 100,
              fromBottom: 0,
              toBottom: 0,
            }}
            style={{
              borderWidth: 0,
              backgroundColor: '#cbd5e1',
            }}
          >
            <Text
              style={{
                height: '100%',
                fontSize: 20,
                lineHeight: 30,
                paddingBottom: '60%',
                paddingRight: SCREEN_PADDING_RIGHT,
              }}
            >
              {meal?.strInstructions}
            </Text>
          </InfoCard>
        </View>
      </View>
      <CButton
        onPress={() => handleOnStartCooking()}
        style={{
          button: {
            position: 'absolute',
            bottom: 0,
            zIndex: 10,
            marginBottom: 25,
          },
        }}
      >
        <View
          style={{
            backgroundColor: 'black',
            borderRadius: BORDER_RADIUS_FULL,
            padding: 15,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 4,
          }}
        >
          {(() => {
            let componentToRender: ReactNode | null;
            switch (cookingStatus) {
              case 'viewing':
                componentToRender = (
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}
                  >
                    Start Cooking
                  </Text>
                );
                break;

              case 'cooking':
                componentToRender = (
                  <>
                    <Ionicons name="stop-circle-outline" size={25} color="red" />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                      }}
                    >
                      Stop Cooking
                    </Text>
                  </>
                );
                break;
              default:
                componentToRender = (
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}
                  >
                    Review
                  </Text>
                );
                break;
            }
            return componentToRender;
          })()}
          {/* {cookingStatus && <Ionicons name="stop-circle-outline" size={25} color="red" />}
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}
          >
            {cookingStatus === 'viewing'
              ? 'Start Cooking'
              : cookingStatus === 'cooking'
              ? 'Stop Cooking'
              : 'Reviewed'}
          </Text> */}
        </View>
      </CButton>
      <RatingModal idMeal={meal.idMeal} open={openRatingModal} setOpen={setOpenRatingModal} />
    </View>
  );
};

const style = StyleSheet.create({
  meal__head: {
    gap: 20,
  },
  meal__image$$container: {
    // gap: 15,
    height: '40%',
  },
  meal__title: {
    fontSize: FONTSIZE_2XL,
    fontWeight: '600',
    paddingLeft: SCREEN_PADDING_LEFT,
    paddingRight: SCREEN_PADDING_RIGHT,
    marginBottom: 15,
    // width: '100%',
  },
  meal__image: {
    height: '100%',
    width: '100%',
    // alignSelf: 'center',
    borderRadius: BORDER_RADIUS_MD,
  },
  meal__wrapper: {
    flexGrow: 1,
    height: '100%',
  },

  meal__miniinfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  meal__head$$info: {
    // borderWidth: 0.2,
    // borderRadius: BORDER_RADIUS_MD,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-around',
    flexGrow: 1,
  },
});

export default MealScreen;
