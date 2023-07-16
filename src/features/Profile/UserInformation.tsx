import { StyleSheet, Text, View } from 'react-native';
import { SECONDARY_THEME } from '../../constants/styles';
import { Ionicons } from '../../icons';
import Wrapper from './Wrapper';
import { CButton } from '../../components';
import { NestedNavProps } from '../../../App';
import { useProfileStore } from '../../stores/profile';
import { useNavigation } from '@react-navigation/native';

const UserInformation = () => {
  const profile = useProfileStore((state) => state.profile);
  const navigation = useNavigation<NestedNavProps['navigation']>();

  return (
    <Wrapper title="Informations">
      <View style={style.information__card}>
        <CButton
          onPress={() =>
            navigation.navigate('ManageProfile', {
              existingProfile: profile,
            })
          }
          style={{
            button: style.settings$$button,
          }}
        >
          <Ionicons name="settings-outline" size={27} />
        </CButton>
        <Ionicons name="person-outline" size={40} style={style.information__card$$image} />
        <View style={style.information__card$$userinfo}>
          <Text style={style.information__card$$userinfo__name}>{profile?.name}</Text>
          <Text style={style.information__card$$userinfo__email}>{profile?.email}</Text>
          {profile?.details && (
            <Text numberOfLines={3} style={style.information__card$$userinfo__description}>
              {profile?.details}
            </Text>
          )}
        </View>
      </View>
    </Wrapper>
  );
};

const style = StyleSheet.create({
  information__card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    position: 'relative',
  },
  information__card$$image: {},
  information__card$$userinfo: {
    flexDirection: 'column',
    gap: 5,
    width: '80%',
    flexGrow: 1,
  },
  information__card$$userinfo__name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  information__card$$userinfo__email: {
    color: '#64748b',
  },
  information__card$$userinfo__description: {
    color: SECONDARY_THEME,
  },

  settings$$button: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginRight: 15,
    marginTop: 10,
    zIndex: 10,
  },
});

export default UserInformation;
