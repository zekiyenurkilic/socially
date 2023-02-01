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

const FeedItem = ({ item, index }) => {
  const translateYImage = new Animated.Value(-10);

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
      <Image style={styles.feedImage} source={item.post} />
      <View style={styles.profileMain}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={item.profileImage}
            style={{ width: 37, height: 35, marginRight: 7 }}
          />
          <View>
            <StyledText
              fontSize={12}
              fontWeight="400"
              text={item.fullName}
              color={COLORS.white}
            />
            <StyledText
              fontSize={12}
              fontWeight="400"
              text={item.time}
              color={COLORS.transparentGray}
            />
          </View>
        </View>
        <Image source={require('../assets/dotButton.png')} />
      </View>
      <View style={styles.imageInf}>
        <View style={styles.imageInfItem}>
          <Image
            source={require('../assets/like.png')}
            width={15}
            height={13}
            style={{ marginRight: 8 }}
          />
          <StyledText
            fontWeight="400"
            fontSize={12}
            text={item.like}
            color={COLORS.white}
          />
        </View>
        <View style={styles.imageInfItem}>
          <Image
            source={require('../assets/comments.png')}
            width={15}
            height={13}
            style={{ marginRight: 8 }}
          />
          <StyledText
            fontWeight="400"
            fontSize={12}
            text={item.commets}
            color={COLORS.white}
          />
        </View>
        <View style={styles.imageInfItem}>
          <Image
            source={require('../assets/flag.png')}
            width={15}
            height={13}
            style={{ marginRight: 8 }}
          />
          <StyledText
            fontWeight="400"
            fontSize={12}
            text={item.saved}
            color={COLORS.white}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    position: 'relative',
  },
  feedImage: {
    width: '100%',
    borderRadius: 35,
  },
  profileMain: {
    position: 'absolute',
    top: 13,
    left: 13,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageInf: {
    position: 'absolute',
    bottom: 12,
    left: 33,
    right: 33,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageInfItem: {
    backgroundColor: 'rgba(229, 229, 229, 0.4)',
    borderRadius: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
