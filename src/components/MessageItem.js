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
import React from 'react';
import { COLORS } from '../constants';

const { width, height } = Dimensions.get('screen');

const MessageItem = ({ item, index }) => {
  const translateYImage = new Animated.Value(30);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: (index + 1) * 250,
    useNativeDriver: true,
    easing: Easing.linear,
  }).start();

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [
          {
            translateY: translateYImage,
          },
        ],
      }}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={item.img} />
      </View>

      <View>
        <StyledText
          fontSize={12.8}
          fontWeight={'400'}
          color={COLORS.black}
          text={item.fullName}
          style={{ marginBottom: 5 }}
        />
        <StyledText
          fontSize={12.8}
          fontWeight={'400'}
          color={COLORS.messageTextColor}
          text={item.message}
          style={{ width: '60%' }}
        />
      </View>
    </Animated.View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255, 0.6);',
    padding: 15,
    borderRadius: 33,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    padding: 2,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    flex: 0.3,
  },
});
