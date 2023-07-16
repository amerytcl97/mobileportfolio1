import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CONTENT_WIDTH, SCREEN_PADDING_LEFT, SCREEN_STYLE } from '../constants/styles/screen';
import { CButton, Header } from '../components';
import { DrawerProps, ScreenProps } from '../../App';
import { CategoryTabs, SearchInput } from '../features/Home';
import { Ionicons } from '../icons';
import { BORDER_RADIUS_FULL } from '../constants/styles';
import Content from '../features/Home/Content';
import { getMealsByCategory } from '../api';
import { useEffect, useRef, useState } from 'react';
import { Category, Meal } from '../types';

const HomeScreen = ({ navigation }: DrawerProps) => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<Category>();

  // const selectedCategoryRef = useRef<Category | null>();
  useEffect(() => {
    (async () => {
      if (selectedCategory) {
        const mealsByCategory = await getMealsByCategory(selectedCategory.strCategory);
        setMeals(mealsByCategory);
      }
    })();
  }, [selectedCategory]);

  return (
    <View
      style={[
        SCREEN_STYLE.SCREEN,
        SCREEN_STYLE.SCREEN__CENTER,
        {
          paddingBottom: 10,
        },
      ]}
    >
      <Header
        style={SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL}
        // startButton={
        //   <CButton onPress={() => navigation.navigate('Profile')}>
        //     <Ionicons name="person-circle-sharp" size={30} />
        //   </CButton>
        // }
        endButton={
          <CButton
            onPress={() => navigation.toggleDrawer()}
            style={{
              button: {
                borderRadius: BORDER_RADIUS_FULL,
                alignItems: 'center',
                justifyContent: 'center',
                // height: '100%',
                width: '100%',
              },
            }}
          >
            <Ionicons name="reorder-three-outline" size={30} />
          </CButton>
        }
      />
      <View style={[SCREEN_STYLE.SCREEN__CONTENT, styles.content]}>
        <View style={[SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL]}>
          <Text style={styles.header__extend$$title}>Get cooking today!</Text>
          <SearchInput
            placeholder="Search recipe"
            onSubmit={(query) => {
              navigation.navigate('Search', {
                strMeal: query,
              });
            }}
            showSearchIcon
            style={{
              fontSize: 25,
              padding: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 0.5,
          }}
        >
          <CategoryTabs
            getSelectedCategory={async (selectedCategory) => setSelectedCategory(selectedCategory)}
            selectedCategory={selectedCategory}
          />
        </View>
        <View
          style={{
            flex: 4,
          }}
        >
          {selectedCategory?.strCategory && (
            <Content meals={meals} strCategory={selectedCategory?.strCategory} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header__extend: {
    width: CONTENT_WIDTH,
    backgroundColor: 'yellow',
  },
  header__extend$$title: {
    fontSize: 28,
    fontWeight: '500',
  },
  content: {
    gap: 15,
  },
});

export default HomeScreen;
