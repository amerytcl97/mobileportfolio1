import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import FieldWrapper, { FieldWrapperProps } from './FieldWrapper';
import { BORDER_RADIUS_SM } from '../../../constants/styles/borderRadius';
import { Ionicons } from '../../../icons';
import { FieldError } from 'react-hook-form';

export type InputFieldProps = {
  error?: FieldError;
} & TextInputProps &
  Omit<FieldWrapperProps, 'children'>;

const InputField = ({ label, error, style: customStyle, ...props }: InputFieldProps) => {
  return (
    <FieldWrapper label={label}>
      <View style={[styles.input__wrapper, error ? styles.input__wrapper$$error : {}]}>
        <TextInput {...props} style={[styles.input, customStyle]} />
        {error && <Ionicons name="alert-outline" size={25} color="red" />}
      </View>
    </FieldWrapper>
  );
};

const styles = StyleSheet.create({
  input__wrapper: {
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS_SM,
    borderWidth: 0.5,
    alignItems: 'center',
    paddingRight: 10,
  },
  input__wrapper$$error: {
    borderColor: 'red',
  },
  input: {
    fontSize: 23,
    padding: 15,
    flexGrow: 1,
  },
  input__icon$$action: {},
});

export default InputField;
