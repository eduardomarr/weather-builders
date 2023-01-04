import React from 'react';

import { Container, LogoImage, Title } from './styles';

import LogoIcon from '../../assets/logo.png';

export function Logo() {
  return (
    <Container>
      <LogoImage source={LogoIcon} />
      <Title>Weather Builders</Title>
    </Container>
  );
}
