import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BORDER_RADIUS_MD, SECONDARY_THEME } from '../../constants/styles';
import { BORDER_RADIUS_SM } from '../../constants/styles/borderRadius';
import { Image } from 'expo-image';
import { TheMealDB_API_INGREDIENT_PREVIEW_IMGS_URL } from '../../constants/api';

export type Ingredient = {
  name: string;
  measure: string;
};

type IngredientsListProps = {
  ingredients: Ingredient[];
};

// const IMAGE_URL = 'www.themealdb.com/images/ingredients/';

const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  return (
    <ScrollView
      bounces={false}
      style={{
        // height: 500,
        // maxHeight: '100%',
        marginBottom: '100%',
      }}
    >
      <View style={styles.list}>
        {ingredients.map((ingredient, index) => (
          <View key={index} style={styles.list__item}>
            <Image
              source={{
                uri: `${TheMealDB_API_INGREDIENT_PREVIEW_IMGS_URL}${ingredient.name}.png`,
              }}
              style={styles.list__item__image}
            />
            <Text style={styles.list__item__name}>{ingredient.name}</Text>
            <Text style={styles.list__item__measure}>{ingredient.measure}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 10,
  },
  list__item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f1f5f9',
    borderRadius: BORDER_RADIUS_SM,
    gap: 15,
  },
  list__item__image: {
    height: 65,
    width: 65,
  },
  list__item__name: {
    fontSize: 18,
    flexGrow: 1,
  },
  list__item__measure: {
    color: '#475569',
  },
});

export default IngredientsList;
