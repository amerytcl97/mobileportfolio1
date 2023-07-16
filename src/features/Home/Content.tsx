import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Category, Meal } from '../../types';
import { MealCard } from '../../components';
import { useEffect } from 'react';
import { SCREEN_PADDING_LEFT, SCREEN_STYLE } from '../../constants/styles/screen';

type ContentProps = {
  meals: Meal[];
  strCategory: Category['strCategory'];
};

const Content = ({ meals = [], strCategory }: ContentProps) => {
  useEffect(() => {}, [strCategory]);

  return (
    <View style={[style.content]}>
      <View style={[style.content__filter, SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL]}>
        <Text style={style.content__filter$$text}>{meals.length} Recipes</Text>
        <View style={style.content__filter$$actions}></View>
      </View>
      <FlatList
        data={meals}
        renderItem={({ item }) => <MealCard {...item} strCategory={strCategory} />}
        horizontal
        bounces={false}
        contentContainerStyle={{
          gap: 15,
          paddingLeft: SCREEN_PADDING_LEFT,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  content__filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content__filter$$text: {
    fontSize: 25,
    fontWeight: '500',
  },

  content__filter$$actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content__list: {
    flexGrow: 1,
  },
});

export default Content;
