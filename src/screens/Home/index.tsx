import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, RefreshControl } from 'react-native';
import { useTheme } from 'styled-components';

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
  Title,
  Bold,
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

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const { getCurrentWeather, weather } = useWeather();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      getCurrentWeather();
      setRefreshing(false);
    });
  }, [getCurrentWeather]);

  const navigation = useNavigation();

  const today = format(new Date(), 'PPPP', {
    locale: ptBR,
  });

  useEffect(() => {
    setLoading(true);
    getCurrentWeather();
    setLoading(false);
  }, [getCurrentWeather]);

  const cardData = [
    {
      id: String(Math.random()),
      title: 'Pressão',
      icon: 'time-fill',
      value: weather.pressure,
    },
    {
      id: String(Math.random()),
      title: 'Vento',
      icon: 'windy-fill',
      value: weather.windSpeed,
    },
    {
      id: String(Math.random()),
      title: 'Umidade',
      icon: 'contrast-drop-2-fill',
      value: weather.humidity,
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
    },
  ];

  return (
    <Gradient colors={['#090932', '#1B86E6']} start={{ x: 0.1, y: 0.9 }} end={{ x: 1.5, y: 1.8 }}>
      <Container
        refreshControl={
          <RefreshControl progressBackgroundColor={'#1B86E6'} tintColor={'#fff'} colors={['#fff']} refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Content>
          <Header>
            <Title>
              Bom dia, {'\n'}
              <Bold>Usuário</Bold>
            </Title>
            <HeaderButton onPress={() => navigation.navigate('Settings')}>
              <HeaderIcon name="settings-4-fill" color={'#fff'} />
            </HeaderButton>
          </Header>

          {loading ? (
            <LoadingContainer>
              <Loading color={'#fff'} size="large" />
            </LoadingContainer>
          ) : (
            <>
              <MainCard>
                <District>{weather.district}</District>
                <CurrentWeather>{weather.temp}°</CurrentWeather>
                <ImageWeather source={{ uri: weather.icon }} />
                <WeatherDescription>{weather.description}</WeatherDescription>
                <MaxMinContainer>
                  <MaxMinLabel>min: {weather.tempMin}</MaxMinLabel>
                  <Spacer />
                  <MaxMinLabel>max: {weather.tempMax}</MaxMinLabel>
                </MaxMinContainer>
              </MainCard>

              <CurrentDate>{today}</CurrentDate>

              <CardGrid>
                {cardData.map((item: any) => (
                  <Card key={item.id} title={item.title} icon={item.icon} value={item.value} />
                ))}
              </CardGrid>
            </>
          )}
        </Content>
      </Container>
    </Gradient>
  );
}
