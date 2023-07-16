import { ReactNode, createContext, useContext, useState } from 'react';
import { View } from 'react-native';
import Toast, { ToastProps } from '../components/Elements/Toast';
import { StyleSheet } from 'react-native';

const toastContextInit: {
  setToast: (title: string, durationMs?: number) => void;
} = {
  setToast(title, durationMs = 2000) {},
};

export type ToastContextProps = {
  children: ReactNode;
};

export const ToastContext = createContext(toastContextInit);

const ToastContextProvider = ({ children }: ToastContextProps) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastTitle, setToastTile] = useState<string>('');
  const [toastDurationMs, setToastDurationMs] = useState<number>(0);

  const setToast = (title: string, durationMs: number = 2000) => {
    setToastTile(title);
    setToastDurationMs(durationMs);
    setShowToast(true);
  };

  return (
    <ToastContext.Provider
      value={{
        setToast,
      }}
    >
      <View style={styles.container}>
        {children}
        <Toast
          title={toastTitle}
          show={showToast}
          setShow={setShowToast}
          durationMs={toastDurationMs}
        />
      </View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default ToastContextProvider;
