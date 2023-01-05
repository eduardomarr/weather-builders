
import React from 'react';
import { ThemeWrapper as wrapper} from '../../utils/ThemeWrapper';

import { Card } from '.';
import { render } from '@testing-library/react-native';

describe('Card Component', () => {
  it('should be render correctly', () => {
    const { getByText } = render(
      <Card title="Pressão" icon="time-fill" value="10" />,
      {wrapper}
    );

    const CardComponent = getByText('Pressão');
    expect(CardComponent.props.children).toEqual('Pressão');
  });

  it('should be styled correctly', () => {
    const { getByText } = render(
      <Card title="Pressão" icon="time-fill" value="10" />,
      {wrapper}
    );

    const CardComponent = getByText('Pressão');
    expect(CardComponent.props.style[0].color).toEqual('#FFFFFF');
    expect(CardComponent.props.style[0].fontSize).toEqual(35);
    expect(CardComponent.props.style[0].fontFamily).toEqual('Manrope-SemiBold');
    expect(CardComponent.props.style[0].textAlign).toEqual('center');
  });

});

