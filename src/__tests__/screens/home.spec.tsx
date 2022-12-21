import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../styles/theme';
import { Home } from '../../screens/Home';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('Home screen', () => {
  // it('should be render', async () => {
  //   const { result } = renderHook(() => useAuth(), {
  //     wrapper: AuthProvider,
  //   });

  //   await act(async () => console.log(result.current));
  // });

  it('should be render', async () => {
    const { debug } = render(<Home />, {
      wrapper: Providers,
    });

    // const { result } = renderHook(() => useAuth(), {
    //   wrapper: AuthProvider,
    // });

    debug();
  });
});
