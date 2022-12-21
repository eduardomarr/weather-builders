import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { Routes } from './src/routes';

import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
