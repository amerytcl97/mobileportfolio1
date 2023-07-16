import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { SCREEN_STYLE } from '../constants/styles/screen';
import { SafeAreaView } from 'react-native-safe-area-context';

type HeaderProps = {
  startButton?: ReactNode;
  title?: ReactNode | string | undefined;
  endButton?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Header = ({ startButton, title, endButton, style: customStyle }: HeaderProps) => {
  return (
    <SafeAreaView
      style={[SCREEN_STYLE.SCREEN__HEADER, SCREEN_STYLE.SCREEN__CENTER, style.header, customStyle]}
    >
      <View style={style.header__start$$button}>{startButton}</View>
      <View
        style={{
          flexGrow: 1,
        }}
      >
        {typeof title !== 'undefined' ? (
          typeof title !== 'string' ? (
            title
          ) : (
            <Text numberOfLines={1} style={style.header__title}>
              {title}
            </Text>
          )
        ) : (
          <></>
        )}
      </View>
      <View style={style.header__end$$button}>{endButton}</View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    width: '100%',
  },
  header__start$$button: {
    width: '10%',
    alignItems: 'flex-start',
  },
  header__title: {
    fontSize: 23,
    fontWeight: '500',
    textAlign: 'center',
  },
  header__end$$button: {
    width: '10%',
    alignItems: 'flex-start',
  },
});

export default Header;
