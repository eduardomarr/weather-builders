import React from 'react';

import { useTheme } from 'styled-components';

import { Container, CardTitle, CardContent, CardIcon, CardValue } from './styles';
import { CardProps } from './types';

export function Card({ title, icon, value, ...props }: CardProps) {
  const theme = useTheme();

  return (
    <Container {...props}>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <CardIcon name={icon} color={theme.colors.white} />
        <CardValue>{value}</CardValue>
      </CardContent>
    </Container>
  );
}
