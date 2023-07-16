import { TheMealDB_API_BASE_URL } from "../constants/api"
import { Meal, MealsAPI } from "../types";


export const getMealsByCategory = async (categoryName: string): Promise<Meal[] | []> => {
    const DESTINATION_URL = "filter.php?c="
    try {
        const response = await fetch(`${TheMealDB_API_BASE_URL}${DESTINATION_URL}${categoryName}`);
        if (!response.ok) {
            throw Error("Problem retrieving foods by Category");
        }
        return (await response.json() as MealsAPI).meals as Meal[] || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getMeal = async (idMeal: string) => {
    const DESTINATION_URL = `lookup.php?i=${idMeal}`;
    try {
        const response = await fetch(`${TheMealDB_API_BASE_URL}${DESTINATION_URL}`);
        if (!response.ok) {
            throw Error("Problem retrieving meal");
        }
        // console.log('getMeal', await response.json());
        return (await response.json()).meals[0];

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export const getMealsBySearch = async (strMeal: string): Promise<Meal[] | []> => {
    const DESTINATION_URL = `search.php?s=${strMeal}`;
    try {
        const response = await fetch(`${TheMealDB_API_BASE_URL}${DESTINATION_URL}`);
        if (!response.ok) {
            throw Error("Problem retrieving meals through search");
        }
        return (await response.json()).meals
    } catch (error) {
        console.error(error);
        return []
    }
}