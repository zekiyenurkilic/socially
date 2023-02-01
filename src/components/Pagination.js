import { StyleSheet, Animated, View, Dimensions } from 'react-native';
import { COLORS } from '../constants';

import React from 'react';

const { width } = Dimensions.get('screen');

const Pagination = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [11, 11, 11],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#fff', '#000', '#fff'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              { width: dotWidth, backgroundColor },
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 200,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  dotActive: {
    backgroundColor: COLORS.black,
  },
});
