import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  Gradient,
  Container,
  Content,
  Header,
  LoadingContainer,
  Loading,
  HeaderButton,
  HeaderIcon,
  MainCard,
  District,
  CurrentDate,
  CurrentWeather,
  ImageWeather,
  WeatherDescription,
  MaxMinContainer,
  MaxMinLabel,
  Spacer,
  CardGrid,
} from './styles';

import { Card } from '../../components/Card';
import { useWeather } from '../../hooks/useWeather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/types';
import { CardDataTypes } from './types';
import theme from '../../styles/theme';

export function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const { getCurrentWeather, weather, loading, setLoading } = useWeather();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    getCurrentWeather();
    setRefreshing(false);
    setLoading(false);
  }, [getCurrentWeather, setLoading]);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const today = format(new Date(), 'PPPP', {
    locale: ptBR,
  });

  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather]);

  const cardData: CardDataTypes[] = [
    {
      id: String(Math.random()),
      title: 'Pressão',
      icon: 'time-fill',
      value: weather.pressure,
      unit: 'hPa',
    },
    {
      id: String(Math.random()),
      title: 'Vento',
      icon: 'windy-fill',
      value: weather.windSpeed,
      unit: 'km/h',
    },
    {
      id: String(Math.random()),
      title: 'Umidade',
      icon: 'contrast-drop-2-fill',
      value: weather.humidity,
      unit: '%',
    },
    {
      id: String(Math.random()),
      title: 'Visibilidade',
      icon: 'eye-fill',
      value: weather.visibility,
    },
    {
      id: String(Math.random()),
      title: 'Nascer do sol',
      icon: 'sun-fill',
      value: weather.sunrise,
    },
    {
      id: String(Math.random()),
      title: 'Pôr do sol',
      icon: 'sun-cloudy-fill',
      value: weather.sunset,
    },
    {
      id: String(Math.random()),
      title: 'Sensação térmica',
      icon: 'temp-cold-fill',
      value: weather.feelsLike,
      unit: '°',
    },
  ];

  return (
    <Gradient colors={[theme.colors.background_700, theme.colors.blue_700]} start={{ x: 0.1, y: 0.9 }} end={{ x: 1.5, y: 1.8 }}>
      <Container
        testID="container"
        refreshControl={
          <RefreshControl progressBackgroundColor={theme.colors.blue_700} tintColor={theme.colors.white} colors={[theme.colors.white]} refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Content>
          <Header>
            <HeaderButton onPress={() => navigation.navigate('Settings')}>
              <HeaderIcon name="settings-4-fill" color={theme.colors.white} />
            </HeaderButton>
          </Header>

          {loading ? (
            <LoadingContainer>
              <Loading color={theme.colors.white} size="large" />
            </LoadingContainer>
          ) : (
            <>
              <MainCard>
                <District testID="district">{weather.district}</District>
                <CurrentWeather testID="current-temp">{weather.temp}°</CurrentWeather>
                <ImageWeather testID="icon" source={{ uri: weather.icon }} />
                <WeatherDescription testID="description">{weather.description}</WeatherDescription>
                <MaxMinContainer>
                  <MaxMinLabel testID="min-temp">min: {weather.tempMin}°</MaxMinLabel>
                  <Spacer />
                  <MaxMinLabel testID="max-temp">max: {weather.tempMax}°</MaxMinLabel>
                </MaxMinContainer>
              </MainCard>

              <CurrentDate testID="today">{today}</CurrentDate>

              <CardGrid testID="card-grid">
                {cardData.map((item: CardDataTypes) => (
                  <Card key={item.id} title={item.title} icon={item.icon} value={item.value} unit={item.unit}/>
                ))}
              </CardGrid>
            </>
          )}
        </Content>
      </Container>
    </Gradient>
  );
}
