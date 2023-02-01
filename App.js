import {  StyleSheet, Text, View } from 'react-native';
import React, { createContext, useContext } from 'react';
import Slider from './src/components/Slider';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigations/tabs';
import { useFonts } from 'expo-font';

export const Context = createContext(true);

const App = () => {
  const [fontsLoaded] = useFonts({
    700: require('./assets/fonts/Poppins-Bold.ttf'),
    600: require('./assets/fonts/Poppins-SemiBold.ttf'),
    400: require('./assets/fonts/Poppins-Regular.ttf'),
  });
  
  const show = useContext(Context)

  const [isShow, setIsShow] = React.useState(show);

  const data = {
    isShow,
    setIsShow,
  };
  
  console.log("is", isShow)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Context.Provider value={data}>
      {isShow ? (
        <Slider />
      ) : (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </Context.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
