import React from 'react';
import { ThemeWrapper } from '../../utils/ProviderWrappers';

import { About } from '.';

import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { render } from '@testing-library/react-native';

describe('About Screen', () => {

  it('should be render correctly', () => {

    const { getByTestId } = render(
      <About />,
      {wrapper: ThemeWrapper}
    );

    expect(getByTestId('container')).toBeOnTheScreen();

  });

  it('should be styled correctly', () => {
    const tree = renderer.create(
    <ThemeWrapper>
      <About />
    </ThemeWrapper>
    ).toJSON() as ReactTestRendererJSON;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyle({
        backgroundColor: '#090932',
    });
  });

  it('should have Logo Component', () => {

      const { getByTestId } = render(
        <About />,
        {wrapper: ThemeWrapper}
      );

      expect(getByTestId('logo-component')).toBeOnTheScreen();

    });

    it('should have Current Version Component', () => {

      const { getByTestId } = render(
        <About />,
        {wrapper: ThemeWrapper}
      );

      expect(getByTestId('logo-component')).toBeOnTheScreen();

    });

  });
