import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MealCard } from '../components';
import BackButton from '../components/BackButton';
import { SCREEN_STYLE } from '../constants/styles/screen';
import { BORDER_RADIUS_FULL } from '../constants/styles';
import { FONTSIZE_2XL, FONTSIZE_XL } from '../constants/styles/fontSize';
import { useEffect, useState } from 'react';
import { getMealsBySearch } from '../api/meals';
import { Meal } from '../types';
import { useScreenSize } from '../hooks';
import { SearchInput } from '../features/Home';
import { TextInput } from 'react-native-gesture-handler';

export type SearchProps = ScreenProps<'Search'>;

const SearchScreen = ({ navigation, route }: SearchProps) => {
  const [searchedMeals, setSearchedMeals] = useState<Meal[] | []>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  // const { navigate, goBack, canGoBack, isFocused } = useNavigation();
  const { strMeal = '' } = route.params || {
    params: {
      strMeal: '',
    },
  };
  const { width } = useScreenSize();

  const columnSize = typeof width !== 'undefined' && width <= 430 ? 1 : 2;

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (searchQuery) {
      timeout = setTimeout(() => {
        (async () => {
          // console.log("API CALLED");
          const meals = (await getMealsBySearch(searchQuery)) || [];
          setSearchedMeals(meals);
        })();
      }, 1000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [searchQuery]);

  useEffect(() => {
    if (strMeal) {
      setSearchQuery(strMeal);
    }
  }, [strMeal]);

  return (
    <View style={[SCREEN_STYLE.SCREEN, SCREEN_STYLE.SCREEN__CENTER]}>
      <SafeAreaView style={[SCREEN_STYLE.SCREEN__HEADER, styles.header]}>
        <BackButton onPress={() => navigation.canGoBack() && navigation.goBack()} />
        {/* <TextInput placeholder="Search" style={styles.header__input} /> */}
        <SearchInput
          value={searchQuery || ''}
          style={styles.header__input}
          containerStyle={styles.header__input$$container}
          editable
          onSubmit={(text) => {
            setSearchQuery(text);
          }}
        />
      </SafeAreaView>
      <View
        style={[
          SCREEN_STYLE.SCREEN__CONTENT,
          SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL,
          styles.content,
        ]}
      >
        {width && (
          <FlatList
            data={searchedMeals}
            renderItem={({ item }) => (
              <MealCard
                {...item}
                style={{
                  height: 280,
                }}
              />
            )}
            ListHeaderComponent={
              <Text style={styles.content__product$$amount}>
                Found {searchedMeals && searchedMeals.length} results
              </Text>
            }
            numColumns={columnSize}
            showsVerticalScrollIndicator={false}
            centerContent
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              gap: 20,
              paddingTop: 20,
              alignItems: 'center',
              minWidth: '100%',
              flexGrow: 1,
            }}
            horizontal={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: 5,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // marginBottom: 20,
  },
  header__input$$container: {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  header__input: {
    flexGrow: 1,
    fontSize: FONTSIZE_XL,
    fontWeight: '500',
    paddingRight: 10,
  },
  content: {
    alignItems: 'center',
    borderTopLeftRadius: BORDER_RADIUS_FULL - 20,
    borderTopRightRadius: BORDER_RADIUS_FULL - 20,
    backgroundColor: '#f8fafc',
  },
  content__product$$amount: {
    fontSize: FONTSIZE_2XL,
    fontWeight: '600',
    marginBottom: 10,
  },
  content__meal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default SearchScreen;
