import React, { ReactNode } from 'react';

import { useTheme } from 'styled-components';

import { Container, CardTitle, CardContent, CardIcon, CardValue } from './styles';

interface CardProps {
  title: string;
  icon: string;
  value: string;
}

export function Card({ title, icon, value }: CardProps) {
  const theme = useTheme();

  return (
    <Container>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <CardIcon name={icon} color={theme.colors.white} />
        <CardValue>{value}</CardValue>
      </CardContent>
    </Container>
  );
}
