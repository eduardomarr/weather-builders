import React from 'react';

import { Home } from '.';
import { render } from '@testing-library/react-native';
import { ContextWrapper, ThemeWrapper } from '../../utils/ProviderWrappers';
import renderer from 'react-test-renderer';


jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
      };
    },
  };
});

const HomeScreenWrapped = () => {
  return (
    <ContextWrapper>
      <ThemeWrapper>
        <Home />
      </ThemeWrapper>
    </ContextWrapper>
  );
};

describe('Home Screen', () => {

  it('should be render correctly', () => {

    const {getByTestId} = render(
      <HomeScreenWrapped />
    );

    expect(getByTestId('container')).toBeOnTheScreen();
  });

  it('should be render main card Current Weather', () => {

    const {getByTestId} = render(
      <HomeScreenWrapped />
    );

    expect(getByTestId('container')).toBeOnTheScreen();
    expect(getByTestId('district')).toBeOnTheScreen();
    expect(getByTestId('current-temp')).toBeOnTheScreen();
    expect(getByTestId('icon')).toBeOnTheScreen();
    expect(getByTestId('description')).toBeOnTheScreen();
    expect(getByTestId('min-temp')).toBeOnTheScreen();
    expect(getByTestId('max-temp')).toBeOnTheScreen();

  });

  it('should be render Cards Grid Weather', () => {

    const {getByTestId} = render(
      <HomeScreenWrapped />
    );

    expect(getByTestId('card-grid')).toBeOnTheScreen();

  });

  it('should be render today value', () => {

    const {getByTestId} = render(
      <HomeScreenWrapped />
    );

    expect(getByTestId('today')).toBeOnTheScreen();
  });
});

