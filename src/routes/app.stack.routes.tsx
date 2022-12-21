import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';
import { About } from '../screens/About';
import { User } from '../screens/User';
import { useTheme } from 'styled-components';

export type RootStackParamList = {
  Consumption: undefined;
  Settings: undefined;
  About: undefined;
  User: undefined;
};

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
      <Screen
        name="User"
        component={User}
        options={{
          headerShown: true,
          headerTitle: 'Usuário',
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
