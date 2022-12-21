import React from 'react';

import { Container, LogoImage, Title } from './styles';

import LogoIcon from '../../assets/logo.png';
import { LogoProps } from './types';

export function Logo({ testID }: LogoProps) {
  return (
    <Container>
      <LogoImage testID={testID} source={LogoIcon} />
      <Title>Weather Builders</Title>
    </Container>
  );
}
