import Geolocation from '@react-native-community/geolocation';
import { format } from 'date-fns';
import React, { createContext, ReactNode, useState } from 'react';
import { Platform } from 'react-native';
import { api } from '../../services/api';
import { WeatherTypes } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { API_KEY } = process.env;

type Children = {
  children: ReactNode;
};
export interface WeatherContextType {
  getCurrentWeather: () => Promise<void>;
  weather: WeatherTypes;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const weatherStorageKey = '@weatherBuilders:currentWeather';

export const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType);

export function WeatherProvider({ children }: Children) {
  const [weather, setWeather] = useState<WeatherTypes>({} as WeatherTypes);
  const [loading, setLoading] = useState(true);

  const options = {
    enableHighAccuracy: false,
    timeout: 2000,
    maximumAge: 3600000,
  };

  async function getCurrentWeather() {
    setLoading(true);
    Geolocation.getCurrentPosition(
      location => {
        api
          .get(`/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}`, {
            params: {
              units: 'metric',
              lang: 'pt_br',
            },
          })

          .then(async res => {
            const weatherData = {
              description: res.data.weather[0].description,
              temp: res.data.main.temp,
              feelsLike: res.data.main.feels_like,
              tempMin: res.data.main.temp_min.toFixed(),
              tempMax: res.data.main.temp_max.toFixed(),
              pressure: res.data.main.pressure,
              humidity: res.data.main.humidity,
              windSpeed: res.data.wind.speed,
              district: res.data.name,
              visibility: `${res.data.visibility / 1000} km`,
              sunrise: format(new Date(res.data.sys.sunrise), 'p'),
              sunset: format(new Date(res.data.sys.sunset), 'p'),
              icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@4x.png`,
            };
            setWeather(weatherData);

            await AsyncStorage.setItem(weatherStorageKey, JSON.stringify(weatherData));
          })
          .catch(err => {
            console.log('error', err);
          })
          .finally(() => {
            setLoading(false);
          });
      },
      () => console.log(`${Platform.OS} - geo_error`),
      options,
    );
  }

  return <WeatherContext.Provider value={{ getCurrentWeather, weather, loading, setLoading }}>{children}</WeatherContext.Provider>;
}
