import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '../icons';
import CButton, { CButtonProps } from './Elements/CButton';
import { NavigationScreenProps } from '../../App';

const BackButton = ({ onPress }: Pick<CButtonProps, 'onPress'>) => {
  const navigation = useNavigation<NavigationScreenProps>();
  return (
    <CButton onPress={() => navigation.canGoBack() && navigation.goBack()}>
      <Ionicons name="chevron-back-sharp" size={30} />
    </CButton>
  );
};

export default BackButton;
