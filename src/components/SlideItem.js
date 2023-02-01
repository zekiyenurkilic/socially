import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import StyledText from './StyledText';
import { COLORS } from '../constants';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {
  const translateYImage = new Animated.Value(40);
  const translateYView = new Animated.Value(-10);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  Animated.timing(translateYView, {
    toValue: 0,
    duration: 1500,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.25,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: translateYView,
              },
            ],
          }}>
          <StyledText
            style={{ textAlign: 'center' }}
            fontSize={16}
            fontWeight={'400'}
            text={'Welcome to'}
            color={COLORS.darkGray}
          />
          <StyledText
            fontSize={39}
            fontWeight={'700'}
            text={'Socially'}
            color={COLORS.black}
          />
        </Animated.View>
      </View>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },

  image: {
    flex: 0.3,
    width: '100%',
  },
});
