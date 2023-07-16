import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONTSIZE_LG, FONTSIZE_XL } from '../../constants/styles/fontSize';

type InfoWrapperProps = {
  title: string;
  children: ReactNode;
};

const InfoWrapper = ({ title, children }: InfoWrapperProps) => {
  return (
    <View style={style.info}>
      <Text style={style.info$$title}>{title}</Text>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  info: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
  },
  info$$title: {
    fontSize: FONTSIZE_LG,
    fontWeight: '500',
  },
});

export default InfoWrapper;
