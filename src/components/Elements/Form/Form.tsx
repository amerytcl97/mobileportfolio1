import { ReactNode } from 'react';
import { DeepPartial, FieldValues, SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { Button, StyleSheet, View } from 'react-native';

export type FormProps<TFormValue extends FieldValues> = {
  parentMethods?: UseFormReturn<TFormValue>;
  children: (method: UseFormReturn<TFormValue>) => ReactNode;
  defaultValues?: DeepPartial<TFormValue>;
};

const Form = <TFormValue extends Record<string, unknown>>({
  parentMethods,
  children,
  defaultValues,
}: FormProps<TFormValue>) => {
  const methods = useForm<TFormValue>({ defaultValues });

  const selectedMethods = typeof parentMethods !== 'undefined' ? parentMethods : methods;

  return <View style={styles.form}>{children(selectedMethods)}</View>;
};

const styles = StyleSheet.create({
  form: {
    gap: 20,
    flex: 1,
  },
});

export default Form;
