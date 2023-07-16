import { Ionicons } from '../icons';
import { useFavouriteStore } from '../stores';
import CButton, { CButtonProps } from './Elements/CButton';

type FavouriteButtonProps = Omit<CButtonProps, 'children' | 'title'> & {
  isFavourite?: boolean;
};

const FavouriteButton = ({ onPress, isFavourite, style: buttonStyle }: FavouriteButtonProps) => {
  return (
    <CButton onPress={onPress} style={buttonStyle}>
      {isFavourite ? (
        <Ionicons name="heart" size={30} color="#ec4899" />
      ) : (
        <Ionicons
          name="heart-outline"
          size={30}
          style={{
            color: '#ec4899',
          }}
        />
      )}
    </CButton>
  );
};

export default FavouriteButton;
