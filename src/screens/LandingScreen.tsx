import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Footer } from '../components';
import { NestedNavProps, ScreenProps } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MAIN_THEME } from '../constants/styles/color';
import { SCREEN_STYLE } from '../constants/styles/screen';
import FooterButton from '../components/FooterButton';
import { LandingSVG } from '../icons';
import { useProfileStore } from '../stores/profile';

const LandingScreen = ({ navigation }: NestedNavProps) => {
  const profile = useProfileStore((state) => state.profile);
  return (
    <SafeAreaView style={[SCREEN_STYLE.SCREEN, style.container]}>
      <View style={[SCREEN_STYLE.SCREEN__CONTENT, SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL]}>
        <Text style={style.title}>Food For Everyone</Text>
        <LandingSVG
          style={{
            position: 'absolute',
            bottom: 0,
          }}
        />
      </View>
      <Footer>
        <FooterButton
          title="Get Started"
          onPress={() => {
            if (profile) {
              navigation.navigate('Root', {
                screen: 'Home',
              });
            } else {
              navigation.navigate('ManageProfile', {});
            }
          }}
          backgroundColor="white"
          textColor={MAIN_THEME}
          width="100%"
        />
      </Footer>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safe__container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 65,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    width: '100%',
    flexGrow: 1,
    marginTop: 100,
  },
  background__image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    // width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: MAIN_THEME,
    position: 'relative',
  },
});

export default LandingScreen;
