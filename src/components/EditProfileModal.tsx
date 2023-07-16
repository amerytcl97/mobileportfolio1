import { Modal, StyleSheet, Text, View } from 'react-native';
import CModal from './Elements/CModal';
import ProfileForm from './ProfileForm';
import CButton from './Elements/CButton';

const EditProfileModal = () => {
  return (
    <CModal
      openComponent={({ setOpen }) => <CButton title="Open Modal" onPress={() => setOpen(true)} />}
    >
      <View>
        <Text style={styles.content__title}>Lets set up your Profile</Text>
        <ProfileForm />
      </View>
    </CModal>
  );
};

const styles = StyleSheet.create({
  content__title: {
    width: '100%',
    fontSize: 45,
    fontWeight: '600',
  },
});

export default EditProfileModal;
