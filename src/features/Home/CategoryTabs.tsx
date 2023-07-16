import { FlatList, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { CButton, Spinner, MealCard, Chip } from '../../components';
import { useEffect, useState } from 'react';
import { Category, Meal } from '../../types';
import { getCategories } from '../../api';
import { SCREEN_PADDING_LEFT } from '../../constants/styles/screen';

type CategoryTabsProps = {
  getSelectedCategory?: (selectedCategory: Category) => void;
  selectedCategory?: Category;
};

const CategoryTabs = ({ getSelectedCategory = () => {}, selectedCategory }: CategoryTabsProps) => {
  // const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setCategories(categories);
      // setSelectedCategory(categories[0]);
      getSelectedCategory(categories[0]);
    })();
  }, []);

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <Chip
          title={item.strCategory}
          isActive={item.idCategory === selectedCategory?.idCategory}
          onPress={() => {
            // setSelectedCategory(item);
            getSelectedCategory(item);
          }}
        />
      )}
      scrollEnabled
      horizontal
      contentContainerStyle={{
        gap: 10,
        alignItems: 'center',
        paddingLeft: SCREEN_PADDING_LEFT,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={false}
    />
  );
};

const style = StyleSheet.create({
  tab: {},
});

export default CategoryTabs;
