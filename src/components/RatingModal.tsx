import { useEffect, useRef } from 'react';
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import CButton from './Elements/CButton';
import Ratings from './Ratings';
import { useCookedMealsStore } from '../stores/cooked';

export type RatingModalProps = {
  idMeal: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const RatingModal = ({ idMeal, open, setOpen }: RatingModalProps) => {
  const rateCookedMeals = useCookedMealsStore((state) => state.rateCookedMeals);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      // Clear timeout if user decides to close modal before setTimeout executes;
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      style={styles.modal__foreground}
      onPress={() => {
        setOpen(false);
      }}
    >
      <Modal animationType="fade" visible={open} onRequestClose={() => setOpen(false)} transparent>
        <View style={styles.modal__foreground}>
          <View style={styles.modal__content}>
            <View style={styles.modal__content__header}>
              <Text style={styles.modal__content__header__title}>Rate the recipe</Text>
            </View>
            <View style={styles.modal__content__body}>
              <Ratings
                getRatings={(rating) => {
                  rateCookedMeals(idMeal, rating);
                  timeoutRef.current = setTimeout(() => {
                    setOpen(false);
                  }, 1500);
                }}
              />
            </View>
            <CButton
              title="Close"
              onPress={() => setOpen(false)}
              style={{
                text: {
                  fontSize: 20,
                  fontWeight: '500',
                },
              }}
            />
          </View>
        </View>
      </Modal>
    </TouchableWithoutFeedback>
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
  modal__content__header: {
    // borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modal__content__header__title: {
    fontSize: 25,
    fontWeight: '500',
  },
  modal__content__body: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default RatingModal;
