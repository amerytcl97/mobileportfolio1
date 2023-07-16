import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DrawerProps } from '../../App';
import { CONTENT_WIDTH, SCREEN_STYLE } from '../constants/styles/screen';
import { Header } from '../components';
import BackButton from '../components/BackButton';
import Content from '../components/Content';
import ProfileForm from '../components/ProfileForm';

const ManageProfileScreen = ({ navigation, route }: DrawerProps<'ManageProfile'>) => {
  const { params } = route;

  return (
    <View style={[SCREEN_STYLE.SCREEN__CONTENT, SCREEN_STYLE.SCREEN__CENTER]}>
      <Header startButton={<BackButton />} style={SCREEN_STYLE.SCREEN__PADDING_HORIZONTAL} />
      <ScrollView
        bounces={false}
        style={{
          flex: 1,
          width: CONTENT_WIDTH,
        }}
      >
        <Content
          center={false}
          style={{
            flex: 1,
            gap: 20,
          }}
        >
          {typeof params !== 'undefined' && params.existingProfile ? (
            <Text style={styles.content__title}>Manage Profile</Text>
          ) : (
            <Text style={styles.content__title}>Lets set up your Profile</Text>
          )}
          <ProfileForm
            defaultValues={params.existingProfile}
            getResponse={(success) => success && navigation.canGoBack() && navigation.goBack()}
          />
        </Content>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content__title: {
    width: '100%',
    fontSize: 35,
    fontWeight: '600',
  },
});

export default ManageProfileScreen;
