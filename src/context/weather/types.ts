import { ReactNode } from 'react';

export interface WeatherTypes {
  description: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  district: string;
  visibility: string;
  sunset: string;
  sunrise: string;
  icon: string;
}

export type Children = {
  children: ReactNode;
};
export interface WeatherContextType {
  getCurrentWeather: () => Promise<void>;
  weather: WeatherTypes;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
