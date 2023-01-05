import React from 'react';
import { Logo } from '../../components/Logo';

import { Container, Content, Version } from './styles';

export function About() {
  return (
    <Container testID="container">
      <Content>
        <Logo testID="logo-component"/>
        <Version testID="version-component">Versão: 1.0.0</Version>
      </Content>
    </Container>
  );
}
