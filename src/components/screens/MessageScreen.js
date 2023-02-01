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
} from 'react-native';
import React from 'react';
import StyledText from '../StyledText';
import { COLORS, ROUTES } from '../../constants';

const { width, height } = Dimensions.get('screen');

const ProfileScreen = ({ route, navigation }) => {
  const item = route.params;
  const [text, setText] = React.useState('');
  const [inputBottom, setInputBottom] = React.useState(40);

  const [keyboardStatus, setKeyboardStatus] = React.useState(false);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
      setInputBottom(e.endCoordinates.height);
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', (e) => {
      setInputBottom(40);
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const MessageItem = ({ item, index }) => {
    const isSender = item.type === 'sender';

    return (
      <View style={styles.messageListItem}>
        <View style={isSender ? styles.sender : styles.receiver}>
          <StyledText
            style={{ textAlign: isSender ? 'right' : 'left' }}
            text={item.message}
            fontSize={12}
            fontWeight="400"
            color={COLORS.messageTextColor}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={{ ...styles.container, height: keyboardStatus ? 100 : 250 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.CONVERSATIONS);
              Keyboard.dismiss();
            }}>
            <Image source={require('../../assets/back.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={item.img} />
          </View>

          <View>
            <StyledText
              text={item.fullName}
              fontSize={20}
              fontWeight="400"
              color={COLORS.black}
            />
            <StyledText
              text={item.status}
              fontSize={12}
              fontWeight="400"
              color={COLORS.messageTextColor}
            />
          </View>
        </View>
      </View>

      <View style={styles.messagesMain}>
        <FlatList
          data={item.messages}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <MessageItem item={item} index={index} />
          )}
          contentContainerStyle={{ paddingBottom: keyboardStatus ? 500 : 400 }}
        />
      </View>
      <View
        style={{
          ...styles.inputContainer,
          bottom: inputBottom,
          ...(keyboardStatus
            ? styles.keybordShowInput
            : styles.keybordHideInput),
        }}>
        <TextInput
          style={styles.input}
          placeholder="Write a message..."
          placeholderTextColor={COLORS.messageTextColor}
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => Keyboard.dismiss()}
          style={styles.sendIconMain}>
          <Image
            style={styles.sendIcon}
            source={require('../../assets/send.png')}
          />
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageView: {
    padding: 2,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  image: {
    width: 60,
    height: 60,
  },

  messagesMain: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  receiver: {
    backgroundColor: COLORS.messageBgColor,
    paddingVertical: 15,

    textAlign: 'left',
    alignSelf: 'flex-start',
    maxWidth: '80%',
    paddingHorizontal: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  sender: {
    backgroundColor: COLORS.messageBgColor,
    textAlign: 'right',
    alignSelf: 'flex-end',
    maxWidth: '80%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  messageListItem: {
    marginBottom: 16,
  },
  inputContainer: {
    position: 'absolute',

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 1,
    backgroundColor: COLORS.white,

    zIndex: 3,
  },
  input: {
    height: 80,
    paddingLeft: 40,
    fontFamily: '400',
    fontSize: 12,
  },
  sendIconMain: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: COLORS.black,
    width: 60,
    height: 60,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-45deg' }],
  },

  sendIcon: {
    transform: [{ rotate: '45deg' }],
    marginRight: 5,
  },

  keybordShowInput: {
    borderRadius: 0,
    left: 0,
    right: 0,
    width: width,
  },
  keybordHideInput: {
    borderRadius: 46,
    width: width - 60,
    left: 30,
    right: 30,
  },
});
