import React from 'react';

import { Container, Title } from './styles';
import { ButtonProps } from './types';

export function Button({ title, onPress, isDisabledStyle, type = 'primary', ...rest }: ButtonProps) {
  return (
    <Container isDisabledStyle={isDisabledStyle} onPress={onPress} type={type} {...rest}>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
