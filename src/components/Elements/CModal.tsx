import { ReactNode, useState } from 'react';
import { View, Modal, ModalProps, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type CModal = {
  open?: boolean;
  openComponent: ({ setOpen }: { setOpen: (open: boolean) => void }) => ReactNode;
  children: ReactNode;
} & Partial<Omit<ModalProps, 'visible' | 'children'>>;

const CModal = ({ open = false, openComponent, children, animationType }: CModal) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  return (
    <>
      {openComponent({
        setOpen: setIsOpen,
      })}
      <View style={styles.modal__foreground}>
        <Modal animationType={animationType} visible={isOpen} transparent>
          <View style={styles.modal__foreground}>
            <View style={styles.modal__content}>{children}</View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modal__foreground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal__content: {
    margin: 20,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 30,
    gap: 30,
  },
});

export default CModal;
