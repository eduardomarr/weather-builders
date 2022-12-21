import Geolocation from '@react-native-community/geolocation';
import { format } from 'date-fns';
import React, { createContext, ReactNode, useState } from 'react';
import { Platform } from 'react-native';
import { api } from '../../services/api';
import { WeatherTypes } from './types';
// import AsyncStorage from '@react-native-async-storage/async-storage';

type Children = {
  children: ReactNode;
};

export interface WeatherContextType {
  getCurrentWeather: () => Promise<void>;
  weather: WeatherTypes;
}

const API_KEY = 'f2da76684dcb8cc103a744f83d5683ae'; //colocar no .env

export const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType);

export function WeatherProvider({ children }: Children) {
  const [weather, setWeather] = useState<WeatherTypes>({} as WeatherTypes);

  const options = {
    enableHighAccuracy: false,
    timeout: 2000,
    maximumAge: 3600000,
  };

  async function getCurrentWeather() {
    Geolocation.getCurrentPosition(
      location => {
        api
          .get(`/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}`, {
            params: {
              appid: API_KEY,
              units: 'metric',
              lang: 'pt_br',
            },
          })
          .then(res => {
            //APAGAR
            const array = {
              ...res.data,
              sunrise: new Date(res.data.sys.sunrise),
              sunset: new Date(res.data.sys.sunset),
            };

            console.log(JSON.stringify(array, null, 2));
            //APAGAR

            setWeather({
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
            });
          })
          .catch(err => {
            console.log(err);
          });
      },
      () => console.log(`${Platform.OS} - geo_error`),
      options,
    );
  }

  return <WeatherContext.Provider value={{ getCurrentWeather, weather }}>{children}</WeatherContext.Provider>;
}
