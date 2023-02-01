import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../components/screens/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import ConversationsScreen from '../components/screens/ConversationsScreen';
import FavoriteScreen from '../components/screens/FavoriteScreen';
import PlusScreen from '../components/screens/PlusScreen';
import MessageScreen from '../components/screens/MessageScreen';
import { COLORS, ROUTES } from '../constants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ConversationScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
        name={ROUTES.CONVERSATIONS}
        component={ConversationsScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
        name={ROUTES.MESSAGE}
        component={MessageScreen}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 85,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={({ route }) => ({
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                style={{
                  tintColor: focused ? COLORS.activeIconColor : COLORS.black,
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
        })}
      />

      <Tab.Screen
        name={ROUTES.CONVERSATIONS_MAIN}
        component={ConversationScreenNavigator}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/message.png')}
                style={{
                  tintColor: focused ? COLORS.activeIconColor : COLORS.black,
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PLUS}
        component={PlusScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                tintColor: focused ? COLORS.activeIconColor : COLORS.black,
                width: 60,
                height: 60,
                borderRadius: 23,
                top: -30,
                transform: [{ rotate: '-45deg' }],
                backgroundColor: COLORS.black,
                alignItems: 'center',
                justifyContent: 'center',
                ...styles.shadowPlusButton,
              }}>
              <Image
                style={{
                  transform: [{ rotate: '45deg' }],
                }}
                source={require('../assets/plus.png')}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.FAVORITE}
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/favorite.png')}
                style={{
                  tintColor: focused ? COLORS.activeIconColor : COLORS.black,
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/profile.png')}
                style={{
                  tintColor: focused ? COLORS.activeIconColor : COLORS.black,
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  shadowPlusButton: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 4,
    shadowRadius: 3,
    elevation: 1,
  },
});
