import { Pressable, Text, View } from 'react-native';
import Wrapper from './Wrapper';
import { useCookedMealsStore } from '../../stores/cooked';
import { FlatList } from 'react-native-gesture-handler';
import MealCardVertical from '../../components/MealCardVertical';
import { EmptyBox } from '../../icons';

const CookedMeals = () => {
  const { cookedMeals, removeCookedMeal } = useCookedMealsStore();

  console.log('Cooked meals', cookedMeals);

  return (
    <Wrapper
      title="Cooked meals"
      childrenContainerStyle={{
        backgroundColor: 'transparent',
      }}
    >
      <FlatList
        data={cookedMeals}
        renderItem={({ item }) => (
          <MealCardVertical {...item} onDelete={() => removeCookedMeal(item.idMeal)} />
        )}
        ListEmptyComponent={<EmptyBox />}
        contentContainerStyle={{
          width: '100%',
          gap: 10,
          alignItems: 'center',
        }}
        scrollEnabled={false}
      />
    </Wrapper>
  );
};

export default CookedMeals;
