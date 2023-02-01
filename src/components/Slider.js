import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useState, useContext } from 'react';
import { Slides } from '../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import { Context } from '../../App';
import { COLORS } from '../constants';

const { width, height } = Dimensions.get('screen');

const Slider = ({ navigation }) => {
  const { setIsShow } = useContext(Context);

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <View style={styles.bg}></View>
      <View style={styles.bgLine}></View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
      <View>
        <View activeOpacity={0.9} style={styles.nextBorder}></View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setIsShow(false);
          }}
          style={styles.next}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  bg: {
    width: width * 1.8,
    height: height / 1.8,
    backgroundColor: COLORS.mainColorLightGreen,
    borderBottomRightRadius: 152,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    left: -(width / 1.2),
    top: height / 20,
    overflow: 'visible',
    zIndex: 0,
  },
  bgLine: {
    width: width * 2,
    height: height / 2,
    backgroundColor: 'transparent',
    borderColor: COLORS.lineColor,
    borderWidth: 1,
    borderBottomRightRadius: 152,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    left: -(width / 1.3),
    top: height / 6,
    overflow: 'visible',
    zIndex: 0,
  },
  next: {
    width: 250,
    height: 250,
    backgroundColor: COLORS.black,
    borderRadius: 79,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    right: -25,
    bottom: -70,
    overflow: 'visible',
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextBorder: {
    width: 260,
    height: 260,
    backgroundColor: 'transparent',
    borderRadius: 87,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    right: -25,
    bottom: -70,
    overflow: 'visible',
    zIndex: 0,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  nextText: {
    color: COLORS.white,
    transform: [{ rotate: '45deg' }],
    marginTop: -40,
  },
});
