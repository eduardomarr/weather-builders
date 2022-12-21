import React from 'react';

import { Container, Content, Row, Title } from './styles';

export function User() {
  return (
    <Container>
      <Content>
        <Row>
          <Title>Nome:</Title>
        </Row>

        <Row>
          <Title>E-mail:</Title>
        </Row>
      </Content>
    </Container>
  );
}
