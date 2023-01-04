import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '../styles/theme';

type WrapperProps = {
  children: React.ReactNode;
};

export const ThemeWrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};
