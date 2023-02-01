import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  Keyboard,
  ScrollView,
} from 'react-native';
import React from 'react';
import StyledText from '../StyledText';
import { User, MasonryListData } from '../../data';
import MasonryList from '@react-native-seoul/masonry-list';
import { COLORS } from '../../constants';

const { width, height } = Dimensions.get('screen');

const ProfileScreen = ({ route, navigation }) => {
  const user = User;

  const Photo = ({ item, style }) => {
    return (
      <View key={item.id} style={[{ marginTop: 12, flex: 1 }, style]}>
        <Image
          source={item.imgURL}
          style={{
            alignSelf: 'stretch',
          }}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderItem = ({ item, i }) => {
    return <Photo item={item} style={{ marginLeft: i % 2 === 0 ? 0 : 0 }} />;
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ ...styles.container, height: 250 }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={require('../../assets/back.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.profileInfo}>
            <View style={styles.imageView}>
              <Image style={styles.image} source={user.profileImage} />
            </View>

            <View>
              <StyledText
                style={{ textAlign: 'center' }}
                text={user.fullName}
                fontSize={25}
                fontWeight="700"
                color={COLORS.black}
              />
              <StyledText
                style={{ textAlign: 'center' }}
                text={user.username}
                fontSize={16}
                fontWeight="400"
                color={COLORS.darkGray}
              />
            </View>
          </View>
        </View>
        <View style={styles.userFollowersMain}>
          <View>
            <StyledText
              style={{ textAlign: 'center' }}
              text={'Posts'}
              fontSize={16}
              fontWeight="400"
              color={COLORS.messageTextColor}
            />
            <StyledText
              style={{ textAlign: 'center', marginTop: 5 }}
              text={user.posts.toLocaleString('en-US')}
              fontSize={25}
              fontWeight="700"
              color={COLORS.black}
            />
          </View>
          <View>
            <StyledText
              style={{ textAlign: 'center' }}
              text={'Followers'}
              fontSize={16}
              fontWeight="400"
              color={COLORS.messageTextColor}
            />
            <StyledText
              style={{ textAlign: 'center', marginTop: 5 }}
              text={user.followers.toLocaleString('en-US')}
              fontSize={25}
              fontWeight="700"
              color={COLORS.black}
            />
          </View>
          <View>
            <StyledText
              style={{ textAlign: 'center' }}
              text={'Follows'}
              fontSize={16}
              fontWeight="400"
              color={COLORS.messageTextColor}
            />
            <StyledText
              style={{ textAlign: 'center', marginTop: 5 }}
              text={user.follows.toLocaleString('en-US')}
              fontSize={25}
              fontWeight="700"
              color={COLORS.black}
            />
          </View>
        </View>
        <View style={styles.photosMain}>
          <View style={styles.photos}>
            <Image source={require('../../assets/photos.png')} />
          </View>
          <View style={styles.pin}>
            <Image source={require('../../assets/saved.png')} />
          </View>
        </View>
        <View>
          <MasonryList
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<View />}
            contentContainerStyle={{
              paddingHorizontal: 30,
              alignSelf: 'stretch',
            }}
            onEndReached={() => console.log('onEndReached')}
            numColumns={2}
            data={MasonryListData}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.mainColorLightGreen,

    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    justifyContent: 'center',

    alignItems: 'center',
  },
  header: {
    left: 30,
    top: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
  },
  profileInfo: {
    justifyContent: 'center',

    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 86,
    height: 86,
  },

  userFollowersMain: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  photosMain: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },

  photos: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pin: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
