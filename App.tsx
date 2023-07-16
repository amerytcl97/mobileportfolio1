import {
  CompositeScreenProps,
  NavigationContainer,
  NavigationProp,
} from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

import { Meal } from './src/types';
import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import { Profile } from './src/stores/profile';
import ToastContextProvider from './src/context/ToastContextProvider';
import {
  LandingScreen,
  HomeScreen,
  MealScreen,
  SearchScreen,
  ProfileScreen,
  FavouriteScreen,
} from './src/screens';
import ManageProfileScreen from './src/screens/ManageProfileScreen';

export type RootStackParamList = {
  Root: {
    screen: 'Home' | 'Profile' | 'Favourite';
  };
  Landing: undefined;
  Home: undefined;
  Meal: {
    idMeal: string;
  };
  Search: {
    strMeal?: string;
  };
  Favourite: undefined;
  Profile: undefined;
  ManageProfile: {
    existingProfile?: Profile;
  };
  Cook: {
    meal: Meal;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
export type DrawerProps<T extends keyof RootStackParamList = keyof RootStackParamList> =
  DrawerScreenProps<T extends keyof RootStackParamList ? RootStackParamList : never, T>;

export type NestedNavProps<T extends keyof RootStackParamList = keyof RootStackParamList> =
  CompositeScreenProps<
    DrawerScreenProps<RootStackParamList, T>,
    NativeStackScreenProps<RootStackParamList, T>
  >;

export type NavigationScreenProps = NavigationProp<keyof RootStackParamList>;

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerLabelStyle: {
          fontSize: 25,
          fontWeight: '400',
          color: 'black',
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <ToastContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Root" component={DrawerNavigator} />
          <Stack.Screen name="Meal" component={MealScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="ManageProfile" component={ManageProfileScreen} />
        </Stack.Navigator>
        {/* <Drawer.Navigator
          initialRouteName="Landing"
          backBehavior="history"
          screenOptions={{
            headerShown: false,
            drawerPosition: 'right',
            drawerLabelStyle: {
              fontSize: 25,
              fontWeight: '400',
              color: 'black',
            },
          }}
        >
          <Drawer.Screen
            name="Root"
            component={Root}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="Landing"
            component={LandingScreen}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen name="Home" component={HomeScreen} />
          {/* <Drawer.Screen
          name="Meal"
          component={MealScreen}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
          }}
        /> */}
        {/* <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Favourite" component={FavouriteScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Drawer.Screen name="ManageProfile" component={ManageProfile} /> */}
        {/* <Drawer.Screen
          name="Cook"
          component={Cook}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
          }}
        /> 
        </Drawer.Navigator> */}
      </NavigationContainer>
    </ToastContextProvider>
  );
};

export default App;
