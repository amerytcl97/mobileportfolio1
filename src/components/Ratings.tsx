import { StyleSheet, View } from 'react-native';
import { Ionicons } from '../icons';
import CButton from './Elements/CButton';
import { useEffect, useState } from 'react';

export type RatingsProps = {
  getRatings: (rating: number) => void;
};

const Ratings = ({ getRatings }: RatingsProps) => {
  const [currentRating, setCurrentRating] = useState(0);

  const selectedRating = (rating: number) => {
    currentRating === rating ? setCurrentRating((o) => 0) : setCurrentRating((o) => rating);
    // getRatings(currentRating);
  };

  useEffect(() => {
    if (currentRating) {
      getRatings(currentRating);
    }
  }, [currentRating]);

  return (
    <View style={styles.ratings}>
      {Array.from({ length: 5 }).map((_, index) => {
        const rating = index + 1;
        return (
          <CButton key={index} onPress={() => selectedRating(rating)}>
            {currentRating >= rating ? (
              <Ionicons name="star" size={30} color="#facc15" />
            ) : (
              <Ionicons name="star-outline" size={30} />
            )}
          </CButton>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ratings: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },
});

export default Ratings;
