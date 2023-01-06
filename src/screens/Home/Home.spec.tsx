import React from 'react';

import { Home } from '.';
import { render } from '@testing-library/react-native';
import { ContextWrapper, ThemeWrapper } from '../../utils/ProviderWrappers';


jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
      };
    },
  };
});

describe('Home Screen', () => {

  it('should be render correctly', () => {

    const {debug} = render(
      <ContextWrapper>
        <ThemeWrapper>
          <Home />
        </ThemeWrapper>
      </ContextWrapper>
    );

    debug();
  });
});

