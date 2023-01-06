import React from 'react';
import { ThemeWrapper } from '../../utils/ProviderWrappers';

import { Settings } from '.';

import { render } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
      };
    },
  };
});

describe('Settings Screen', () => {

  it('should be render correctly', () => {

    const { getByTestId, debug } = render(
      <Settings />,
      {wrapper: ThemeWrapper}
    );

    debug();

    expect(getByTestId('container')).toBeOnTheScreen();

  });

  it('should be render Screen List', () => {

    const { getByTestId } = render(
      <Settings />,
      {wrapper: ThemeWrapper}
    );

    expect(getByTestId('screen-list')).toBeOnTheScreen();

  });

});
