import CButton, { CButtonProps } from './Elements/CButton';
import { BORDER_RADIUS_FULL, FONTSIZE_MD, MAIN_THEME } from '../constants/styles';

type FooterButtonProps = CButtonProps & {
  backgroundColor?: string;
  textColor?: string;
  width?: string | number;
};

const FooterButton = ({
  title,
  onPress,
  style,
  backgroundColor,
  textColor,
  width = '100%',
}: FooterButtonProps) => {
  return (
    <CButton
      title={title}
      onPress={onPress}
      style={
        style
          ? style
          : {
              button: {
                width: width,
                backgroundColor: backgroundColor || 'black',
                paddingVertical: 20,
                borderRadius: BORDER_RADIUS_FULL - 50,
              },
              text: {
                color: textColor || 'white',
                textAlign: 'center',
                fontSize: FONTSIZE_MD,
                fontWeight: '500',
              },
            }
      }
    />
  );
};

export default FooterButton;
