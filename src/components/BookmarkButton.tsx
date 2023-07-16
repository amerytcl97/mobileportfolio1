import { StyleSheet } from 'react-native';
import { Ionicons } from '../icons';
import CButton, { CButtonProps } from './Elements/CButton';

type BookmarkButtonProps = Omit<CButtonProps, 'children' | 'title'>;

const BookmarkButton = ({ onPress, style: buttonStyle }: BookmarkButtonProps) => {
  return (
    <CButton onPress={onPress} style={buttonStyle}>
      <Ionicons name="bookmark-outline" size={30} style={style.bookmark$$icon} />
    </CButton>
  );
};

const style = StyleSheet.create({
  bookmark$$icon: {
    color: '#f1f5f9',
  },
});

export default BookmarkButton;
