import { ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

export type FieldWrapperProps = {
  label?: string;
  children: ReactNode;
};

const FieldWrapper = ({ children, label }: FieldWrapperProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.wrapper__label}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    gap: 10,
  },
  wrapper__label: {
    fontSize: 25,
    fontWeight: '400',
  },
});

export default FieldWrapper;
