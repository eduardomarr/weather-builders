import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  isDisabledStyle?: boolean;
  type?: 'primary' | 'secondary';
}

export function Button({ title, onPress, isDisabledStyle, type = 'primary', ...rest }: ButtonProps) {
  return (
    <Container isDisabledStyle={isDisabledStyle} onPress={onPress} type={type} {...rest}>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
