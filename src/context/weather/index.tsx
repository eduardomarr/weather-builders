import Geolocation from '@react-native-community/geolocation';
import { format } from 'date-fns';
import React, { createContext, useCallback, useState } from 'react';
import { Platform } from 'react-native';
import { api } from '../../services/api';
import { Children, WeatherContextType, WeatherTypes } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { API_KEY } = process.env;

const weatherStorageKey = '@weatherBuilders:currentWeather';

export const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType);

export function WeatherProvider({ children }: Children) {
  const [weather, setWeather] = useState<WeatherTypes>({} as WeatherTypes);
  const [loading, setLoading] = useState(true);


  const getCurrentWeather = useCallback(async () => {

    const options = {
      enableHighAccuracy: false,
      timeout: 2000,
      maximumAge: 3600000,
    };

    setLoading(true);

    Geolocation.getCurrentPosition(async location => {

      try {
        const {data} = await api.get(`/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}`, {
          params: {
            units: 'metric',
            lang: 'pt_br',
          },
        });

        const weatherData = {
            description: data.weather[0].description,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            tempMin: data.main.temp_min.toFixed(),
            tempMax: data.main.temp_max.toFixed(),
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            district: data.name,
            visibility: `${data.visibility / 1000} km`,
            sunrise: format(new Date(data.sys.sunrise), 'p'),
            sunset: format(new Date(data.sys.sunset), 'p'),
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
          };
          setWeather(weatherData);
          await AsyncStorage.setItem(weatherStorageKey, JSON.stringify(weatherData));

      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }},
      () => console.log(`${Platform.OS} - geo_error`),
      options,
    );
  }, []);

  return (
    <WeatherContext.Provider value={{
      getCurrentWeather,
      weather,
      loading,
      setLoading,
    }}>
      {children}
    </WeatherContext.Provider>
  );
}
