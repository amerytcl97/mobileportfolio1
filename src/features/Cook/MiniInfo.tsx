import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CONTENT_THEME, SECONDARY_THEME } from '../../constants/styles/color';

type MiniInfoProps = {
  title: string;
  content: ReactNode | string;
};

const MiniInfo = ({ title, content }: MiniInfoProps) => {
  return (
    <View style={styles.miniinfo}>
      <Text style={styles.miniinfo__title}>{title}</Text>
      {typeof content !== 'string' ? (
        content
      ) : (
        <Text style={styles.miniinfo__content$$text}>{content}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  miniinfo: {
    alignItems: 'center',
    gap: 10,
  },
  miniinfo__title: {
    fontSize: 22,
    fontWeight: '500',
  },
  miniinfo__content$$text: {
    fontSize: 15,
    // color: SECONDARY_THEME + 30,
  },
});

export default MiniInfo;
