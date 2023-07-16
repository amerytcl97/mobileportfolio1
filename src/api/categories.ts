import categoryJSON from "../../categories.json";
import { Category } from "../types";

export const getCategories = async (): Promise<Category[]> => {
    return categoryJSON.categories;
}