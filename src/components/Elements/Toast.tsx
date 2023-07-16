import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BORDER_RADIUS_FULL } from '../../constants/styles';

export type ToastProps = {
  title: string;
  show: boolean;
  setShow: (show: boolean) => void;
  backgroundColor?: string;
  durationMs?: number;
};

const Toast = ({ title, show = false, setShow, durationMs = 2000 }: ToastProps) => {
  //   const [showToast, setShowToast] = useState<boolean>(show);

  useEffect(() => {
    let toastTimeout: NodeJS.Timeout | null;
    toastTimeout = setTimeout(() => setShow(false), durationMs);

    return () => {
      // Clear toast timeout incase an unmount happens;
      toastTimeout && clearTimeout(toastTimeout);
    };
  }, [show]);

  return (
    <SafeAreaView style={[styles.toast, show ? styles.toast$$show : styles.toast$$hide]}>
      <Text style={styles.toast__title}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  toast: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 0,
    marginBottom: 20,
    backgroundColor: 'white',
    width: '50%',
    alignSelf: 'center',
    borderRadius: BORDER_RADIUS_FULL,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  toast__title: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    flexGrow: 1,
  },
  toast$$show: {
    display: 'flex',
  },
  toast$$hide: {
    display: 'none',
  },
});

export default Toast;
