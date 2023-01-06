import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { WeatherContext } from '../context/weather';
import theme from '../styles/theme';

type WrapperProps = {
  children: React.ReactNode;
};

const mockedContextValues = {
  weather: {
    description: 'description',
    temp: 10,
    feelsLike: 16,
    tempMin: 10,
    tempMax: 16,
    pressure: 10,
    humidity: 50,
    windSpeed: 50,
    district: 'São Paulo',
    visibility: 'visibility',
    sunset: 'sunset',
    sunrise: 'sunrise',
    icon: 'icon',
  },

  getCurrentWeather: jest.fn(),
  loading: false,
  setLoading: jest.fn(),
};

export const ThemeWrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
  );
};

export const ContextWrapper: React.FC<WrapperProps> = ({ children }) => (
  <WeatherContext.Provider value={mockedContextValues}>
    {children}
  </WeatherContext.Provider>
);
