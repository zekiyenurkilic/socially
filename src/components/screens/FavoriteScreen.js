import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { MasonryListData } from '../../data';
import MasonryList from '@react-native-seoul/masonry-list';
import StyledText from '../StyledText';
import { COLORS } from '../../constants';

const FavoriteScreen = ({ navigation }) => {
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
    <SafeAreaView styles={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../../assets/back.png')} />
          </TouchableOpacity>
          <Image source={require('../../assets/notif.png')} />
        </View>
        <StyledText
          style={{ marginTop: 50, marginBottom: 30 }}
          fontSize={25}
          fontWeight={'700'}
          text={'Favorites'}
          color={COLORS.black}
        />
        <View>
          <MasonryList
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<View />}
            contentContainerStyle={{
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

export default FavoriteScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    position: 'relative',
  },
  container: { paddingHorizontal: 30 },
  header: {
    paddingTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
