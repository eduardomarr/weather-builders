import { useContext } from 'react';
import { WeatherContext } from '../context/weather';
import { WeatherContextType } from '../context/weather/types';

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeather must be used within WeatherProvider');
  }

  return context;
};
