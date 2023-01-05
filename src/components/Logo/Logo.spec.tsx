
import React from 'react';
import { ThemeWrapper as wrapper} from '../../utils/ThemeWrapper';

import { Logo } from '.';
import { render } from '@testing-library/react-native';

describe('Logo Component', () => {
  it('should be render correctly', () => {
    const { getByText } = render(
      <Logo />,
      {wrapper}
    );

    const LogoComponent = getByText('Weather Builders');
    expect(LogoComponent.props.children).toEqual('Weather Builders');
  });

});

