import React from 'react';
import {ViewProps} from 'react-native';

import { Container, LogoImage, Title } from './styles';

import LogoIcon from '../../assets/logo.png';

export function Logo({...props}: ViewProps) {
  return (
    <Container {...props}>
      <LogoImage source={LogoIcon} />
      <Title>Weather Builders</Title>
    </Container>
  );
}
