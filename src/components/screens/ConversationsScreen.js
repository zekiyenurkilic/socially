import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import StyledText from '../StyledText';
import { Messages } from '../../data/index';
import MessageItem from '../MessageItem';
import { COLORS, ROUTES } from '../../constants';

const { width, height } = Dimensions.get('screen');

const ConversationsScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [messages, setMessages] = React.useState(Messages);

  const filterMessage = (text) => {
    setText(text);
    if (!text) {
      setMessages(Messages);
      return;
    }

    const filteredMessages = messages.filter((message) =>
      message.fullName.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
    setMessages(filteredMessages);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.bg}></View>
      <View style={styles.bgLine}></View>
      <View style={styles.bgLine2}></View>
      <TouchableOpacity
        activeOpacity={1}
        style={{ ...styles.fabButton, ...styles.shadowPlusButton }}>
        <Image
          style={{
            marginTop: 7,
            transform: [{ rotate: '-45deg' }],
          }}
          source={require('../../assets/send.png')}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Image source={require('../../assets/back.png')} />
          </TouchableOpacity>
          <Image source={require('../../assets/menu.png')} />
        </View>

        <StyledText
          style={{ marginTop: 50 }}
          fontSize={25}
          fontWeight={'700'}
          text={'Messages'}
          color={COLORS.black}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search for contacts"
            placeholderTextColor={COLORS.lightGray}
            onChangeText={(newText) => filterMessage(newText)}
            value={text}
          />
          <Image
            style={styles.searchIcon}
            source={require('../../assets/search.png')}
          />
        </View>
        <FlatList
          data={messages}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.MESSAGE, item)}
              activeOpacity={0.9}>
              <MessageItem item={item} index={index} />
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 250 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConversationsScreen;

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
  inputContainer: {
    position: 'relative',
    marginHorizontal: 20,
    marginVertical: 30,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 1,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  input: {
    height: 48,
    paddingLeft: 60,
    fontFamily: '400',
    fontSize: 12,
  },

  searchIcon: {
    position: 'absolute',
    left: 20,
    top: 13,
  },
  shadowPlusButton: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 2,
    bottom: 50,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 23,
    transform: [{ rotate: '45deg' }],
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: width * 2,
    height: height / 1.3,
    backgroundColor: COLORS.mainColorLightGreen,
    borderRadius: 152,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    left: -(width / 1.4),
    bottom: -height / 3,
    overflow: 'visible',
    zIndex: 0,
  },
  bgLine: {
    width: width * 2.2,
    height: height / 1.2,
    backgroundColor: 'transparent',
    borderRadius: 152,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    left: -(width / 1.1),
    bottom: -height / 3,
    overflow: 'visible',
    zIndex: 0,
    borderColor: COLORS.lineColor,
    borderWidth: 1,
  },
  bgLine2: {
    width: width * 2.2,
    height: height / 1.2,
    backgroundColor: 'transparent',
    borderRadius: 152,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    left: -(width / 1.3),
    bottom: -height / 3,
    overflow: 'visible',
    zIndex: 0,
    borderColor: COLORS.lineColor,
    borderWidth: 1,
  },
});
