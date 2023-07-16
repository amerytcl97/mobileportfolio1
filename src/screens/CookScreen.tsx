import { ScrollView, Text, View } from 'react-native';
import { ScreenProps } from '../../App';
import { SCREEN_STYLE } from '../constants/styles/screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { Footer, Header } from '../components';
import BackButton from '../components/BackButton';
import FooterButton from '../components/FooterButton';
import ContentWrapper from '../components/ContentWrapper';
import { StyleSheet } from 'react-native';
import Instructions from '../features/Cook/Instructions';

const CookScreen = ({ route }: ScreenProps<'Cook'>) => {
  const {
    params: { meal },
  } = route;

  console.log('Cook', meal);

  return (
    <SafeAreaView style={[SCREEN_STYLE.SCREEN]}>
      <Header startButton={<BackButton />} title={meal.strMeal} />
      <ScrollView>
        <View style={[SCREEN_STYLE.SCREEN__CONTENT, SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL]}>
          <ContentWrapper title="Instructions">
            <Instructions instruction={meal.strInstructions} numberOfLines={7} />
          </ContentWrapper>
          {/* <WebView
          source={{
            url: meal.strYoutube,
            html: "",
          }}
          style={{
            height: 100,
            width: 100,
          }}
        /> */}
        </View>
      </ScrollView>
      <Footer>
        <FooterButton title="Done" />
      </Footer>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default CookScreen;
