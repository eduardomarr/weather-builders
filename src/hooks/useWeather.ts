import { useContext } from 'react';
import { WeatherContext, WeatherContextType } from '../context/weather';

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeather must be used within RepositoryProvider');
  }

  return context;
};
