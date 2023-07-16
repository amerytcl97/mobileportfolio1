import { Controller } from 'react-hook-form';
import Form from './Elements/Form/Form';
import InputField from './Elements/Form/InputField';
import CButton from './Elements/CButton';
import { BORDER_RADIUS_FULL } from '../constants/styles';
import { View } from 'react-native';
import { Profile, useProfileStore } from '../stores/profile';
import { ToastContext } from '../context/ToastContextProvider';
import { useContext } from 'react';

export type ProfileForm = Profile;

type ProfileFormProps = {
  defaultValues?: Profile;
  getResponse?: (success: boolean) => void;
};

const ProfileForm = ({ defaultValues, getResponse = () => {} }: ProfileFormProps) => {
  const { setToast } = useContext(ToastContext);
  const { addProfile, editProfile } = useProfileStore();

  const isActionEdit = typeof defaultValues !== 'undefined';

  const onSubmit = (profileForm: ProfileForm) => {
    switch (isActionEdit) {
      case true:
        getResponse(editProfile(profileForm));
        setToast('Profile updated');
        break;
      default:
        getResponse(addProfile(profileForm));
        setToast('Profile has been setup');
        break;
    }
  };

  return (
    <Form<ProfileForm>>
      {({ handleSubmit, control, getFieldState, formState }) => (
        <View
          style={{
            width: '100%',
            flex: 1,
            gap: 20,
          }}
        >
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="name"
            defaultValue={defaultValues?.name}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Name"
                placeholder="Your Name"
                onChangeText={onChange}
                value={value}
                error={formState.errors['name']}
              />
            )}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="email"
            defaultValue={defaultValues?.email}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Email"
                placeholder="Your Email"
                onChangeText={onChange}
                value={value}
                error={formState.errors['email']}
              />
            )}
          />
          <Controller
            control={control}
            name="details"
            defaultValue={defaultValues?.details}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputField
                label="Details"
                placeholder="More about you?"
                onChangeText={onChange}
                value={value}
                error={formState.errors['details']}
                numberOfLines={5}
                multiline
                style={{
                  height: 150,
                }}
              />
            )}
          />
          <CButton
            title="Confirm"
            onPress={handleSubmit(onSubmit)}
            style={{
              button: {
                backgroundColor: 'black',
                paddingHorizontal: 30,
                paddingVertical: 15,
                borderRadius: BORDER_RADIUS_FULL,
              },
              text: {
                fontSize: 25,
                color: 'white',
                textAlign: 'center',
              },
            }}
          />
        </View>
      )}
    </Form>
  );
};

export default ProfileForm;
