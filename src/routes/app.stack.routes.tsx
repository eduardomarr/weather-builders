import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { About } from '../screens/About';
import { useTheme } from 'styled-components';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function MainStackRoutes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          headerTitle: 'Configurações',
          headerStyle: {
            backgroundColor: theme.colors.blue_700,
          },
          headerTintColor: theme.colors.white,
          headerBackTitle: '',
        }}
      />
      <Screen
        name="About"
        component={About}
        options={{
          headerShown: true,
          headerTitle: 'Sobre',
          headerStyle: {
            backgroundColor: theme.colors.blue_700,
          },
          headerTintColor: theme.colors.white,
          headerBackTitle: '',
        }}
      />
    </Navigator>
  );
}
