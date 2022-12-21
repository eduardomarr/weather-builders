import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackRoutes } from './app.stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <MainStackRoutes />
    </NavigationContainer>
  );
}
