import { create } from 'zustand';
import { Meal } from '../types';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealCardProps } from '../components/MealCard';

export type CookedMeal = Omit<MealCardProps, 'onPress'> & {
  rating?: number;
};

type CookedMealStateProps = {
  totalCookedMeals: number;
  cookedMeals: CookedMeal[];
  addToCookedMeals: (cookedMeals: CookedMeal) => void;
  rateCookedMeals: (idMeal: string, rating: number) => void;
  removeCookedMeal: (idMeal: string) => void;
  clearCookedMeals: () => void;
};

const COOKEDMEALS_STORAGE_NAME = 'cookedmeals-storage';

const initialCookedMealsState: Omit<
  CookedMealStateProps,
  'addToCookedMeals' | 'removeCookedMeal' | 'clearCookedMeals' | 'rateCookedMeals'
> = {
  totalCookedMeals: 0,
  cookedMeals: [],
};

export const useCookedMealsStore = create<CookedMealStateProps>()(
  persist(
    (set, get) => ({
      totalCookedMeals: 0,
      cookedMeals: [],
      addToCookedMeals: (cookedMeal) =>
        set((state) => {
          const copyState = { ...state };
          copyState.cookedMeals = [...copyState.cookedMeals, cookedMeal];
          copyState.totalCookedMeals = copyState.cookedMeals.length;
          return { ...copyState };
        }),
      rateCookedMeals: (idMeal, rating) =>
        set((state) => {
          const copyState = { ...state };
          const cookedMealIndex = copyState.cookedMeals.findIndex(
            (cookedMeal) => cookedMeal.idMeal === idMeal
          );
          if (cookedMealIndex !== -1) {
            copyState.cookedMeals[cookedMealIndex].rating = rating;
          }
          return { ...copyState };
        }),
      removeCookedMeal: (idMeal: string) =>
        set((state) => {
          const copyState = { ...state };
          const index = copyState.cookedMeals.findIndex(
            (cookedMeal) => cookedMeal.idMeal === idMeal
          );
          if (index !== -1) {
            copyState.cookedMeals.splice(index, 1);
            copyState.totalCookedMeals = copyState.cookedMeals.length;
          }
          return { ...copyState };
        }),
      clearCookedMeals: () => {
        set({ ...initialCookedMealsState });
      },
    }),
    {
      name: COOKEDMEALS_STORAGE_NAME,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
