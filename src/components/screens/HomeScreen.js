import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import StyledText from '../StyledText';
import FeedItem from '../FeedItem';
import { StoryImageData, FeedData } from '../../data/index';
import { COLORS } from '../../constants';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView styles={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <StyledText fontSize={16} fontWeight="700" text={'Socially'} />
          <Image source={require('../../assets/notif.png')} />
        </View>
        <StyledText
          style={{ marginTop: 50 }}
          fontSize={25}
          fontWeight={'700'}
          text={'Feed'}
          color={COLORS.black}
        />
        <View style={{ marginVertical: 30, flexDirection: 'row' }}>
          <View style={styles.addStory}>
            <Image source={require('../../assets/ellipse.png')} />
            <Image
              source={require('../../assets/add.png')}
              style={styles.addIcon}
            />
          </View>
          <FlatList
            horizontal
            data={StoryImageData}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item.img} style={{ width: 56, height: 56 }} />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginRight: 30 }} />}
          />
        </View>
        <FlatList
          data={FeedData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <FeedItem item={item} index={index} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

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
  addStory: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    borderRadius:56,
    position:"relative",
  
  },
  addIcon: { width: 14, height: 14, position: 'absolute', alignSelf:"center", top:18},
});
export default HomeScreen;
