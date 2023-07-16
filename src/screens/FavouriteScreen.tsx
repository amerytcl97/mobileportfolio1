import { SCREEN_STYLE } from '../constants/styles/screen';
import { FlatList, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { CButton, Footer, Header } from '../components';
import BackButton from '../components/BackButton';
import FooterButton from '../components/FooterButton';
import { useEffect } from 'react';
import { useFavouriteStore } from '../stores';
import PancakeIcon from '../icons/Pancake';
import { Ionicons } from '../icons';
import FavouriteAccordion from '../features/Favourite/FavouriteAccordion';

const FavouriteScreen = () => {
  const { favourites, removeFavouriteItem, clearFavourites } = useFavouriteStore();

  useEffect(() => {}, []);

  return (
    <View style={[SCREEN_STYLE.SCREEN, SCREEN_STYLE.SCREEN__CENTER]}>
      <Header
        startButton={<BackButton />}
        endButton={
          <CButton onPress={() => clearFavourites()}>
            <Ionicons name="trash-outline" size={25} color="red" />
          </CButton>
        }
        title="Favourite Recipes"
        style={SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL}
      />
      <View
        style={[
          SCREEN_STYLE.SCREEN__CONTENT,
          // SCREEN_STYLE.SCREEN__PADDING_LEFT,
          // SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL,
          {
            paddingBottom: 10,
          },
        ]}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            data={favourites}
            renderItem={({ item, index }) => {
              console.log('Checking index', index);
              return <FavouriteAccordion {...item} open={index == 0} />;
            }}
            centerContent
            ListEmptyComponent={
              <View style={styles.empty$$container}>
                <PancakeIcon />
              </View>
            }
            contentContainerStyle={{
              flexGrow: 1,
              gap: 15,
            }}
            scrollEnabled
            horizontal={false}
          />
        </View>
      </View>
      {/* <Footer>
        <FooterButton title="Clear favourites" onPress={() => clearFavourites()} width="50%" />
      </Footer> */}
    </View>
  );
};

const styles = StyleSheet.create({
  empty$$container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});

export default FavouriteScreen;
