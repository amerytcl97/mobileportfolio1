import { StyleSheet } from "react-native";

export const BORDER_RADIUS_SM = 12;
export const BORDER_RADIUS_MD = 25;
export const BORDER_RADIUS_LG = 30;
export const BORDER_RADIUS_FULL = 75;

export const BORDER_RADIUS = StyleSheet.create({
    MD: {
        borderRadius: 4,
    },
    LG: {
        borderRadius: 6
    },
    FULL: {
        borderRadius: 75,
    }
})