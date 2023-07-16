import { SCREEN_STYLE } from '../constants/styles/screen';
import { Header } from '../components';
import BackButton from '../components/BackButton';
import { ScrollView, StyleSheet, View } from 'react-native';
import UserInformation from '../features/Profile/UserInformation';
import CookedMeals from '../features/Profile/CookedMeals';

const ProfileScreen = () => {
  return (
    <View style={[SCREEN_STYLE.SCREEN]}>
      <Header
        startButton={<BackButton />}
        title="Profile"
        style={SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL}
      />
      <ScrollView
        style={{
          height: '100%',
        }}
      >
        <View
          style={[
            SCREEN_STYLE.SCREEN__CONTENT,
            SCREEN_STYLE.SCREEN__CENTER,
            SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL,
            styles.content,
          ]}
        >
          <UserInformation />
          <CookedMeals />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 50,
  },
});

export default ProfileScreen;
