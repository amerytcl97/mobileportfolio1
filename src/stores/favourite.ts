import { create, createStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealCardProps } from '../components/MealCard';

// Type props are named "title" & "data" to follow React Native SectionList format;
export type FavouriteMeal = {
  title: string;
  data: Omit<MealCardProps, 'onPress'>[];
};

type FavouriteStateProps = {
  totalFavourites: number;
  favourites: FavouriteMeal[];
  addToFavourites: (favouriteItem: Omit<MealCardProps, 'onPress'>) => void;
  removeFavouriteItem: (strCategory: string, idMeal: string) => void;
  isMealFavourited: (strCategory: string, idMeal: string) => boolean;
  clearFavourites: () => void;
};

const FAVOURITE_STORAGE_NAME = 'favourite-storage';

const initialFavouriteState: Omit<
  FavouriteStateProps,
  'addToFavourites' | 'removeFavouriteItem' | 'isMealFavourited' | 'clearFavourites'
> = {
  totalFavourites: 0,
  favourites: [],
};

export const useFavouriteStore = create<FavouriteStateProps>()(
  persist(
    (set, get) => ({
      totalFavourites: 0,
      favourites: [],
      addToFavourites: (favouriteItem) =>
        set((state) => {
          console.log('Adding to favourite', favouriteItem);
          const copyState = { ...state };
          const categoryIndex = copyState.favourites.findIndex(
            (favourite) => favourite.title === favouriteItem.strCategory
          );
          if (categoryIndex !== -1) {
            const mealIndex = copyState.favourites[categoryIndex].data.findIndex(
              (meal) => meal.idMeal === favouriteItem.idMeal
            );
            if (mealIndex !== -1) {
              // TODO: IF MEAL IS ALREADY FAVOURITED, CONSIDER REMOVING IT;
              copyState.removeFavouriteItem(favouriteItem.strCategory, favouriteItem.idMeal);
            } else {
              // TODO: MEAL DOES NOT EXIST BUT MAIN CATEGORY EXISTS, ADD TO FAVOURITE
              copyState.favourites[categoryIndex].data = [
                ...copyState.favourites[categoryIndex].data,
                favouriteItem,
              ];
            }
          } else {
            // TODO : IF MAIN CATEGORY DOES NOT EXIST, MEANS NO FAVOURITES;
            copyState.favourites = [
              ...copyState.favourites,
              { title: favouriteItem.strCategory, data: [favouriteItem] },
            ];
          }
          copyState.totalFavourites += 1;
          return { ...copyState };
        }),
      removeFavouriteItem: (strCategory: string, idMeal: string) =>
        set((state) => {
          const copyState = { ...state };
          const categoryIndex = copyState.favourites.findIndex(
            (favourite) => favourite.title === strCategory
          );
          if (categoryIndex !== -1) {
            const mealIndex = copyState.favourites[categoryIndex].data.findIndex(
              (meal) => meal.idMeal === idMeal
            );
            copyState.favourites[categoryIndex].data.slice(mealIndex, 1);
          }
          return { ...copyState };
        }),
      isMealFavourited: (strCategory: string, idMeal: string) => {
        return get().favourites.some((favourite) =>
          favourite.title === strCategory
            ? favourite.data.some((meal) => meal.idMeal === idMeal)
            : false
        );
      },
      clearFavourites: () => {
        set({ ...initialFavouriteState });
      },
    }),
    {
      name: FAVOURITE_STORAGE_NAME,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
