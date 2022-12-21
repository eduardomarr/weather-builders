import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Content, ItemList, ItemTitle, ItemButton, ItemIcon } from './styles';

interface ItemTypes {
  id: string;
  label: string;
  route: string;
}

export function Settings() {
  const theme = useTheme();
  const navigation = useNavigation();

  const listData: ItemTypes[] = [
    {
      id: String(Math.random()),
      label: 'Dados do usuário',
      route: 'User',
    },
    {
      id: String(Math.random()),
      label: 'Sobre',
      route: 'About',
    },
  ];

  return (
    <Container>
      <Content>
        {listData.map((item: ItemTypes) => (
          <ItemButton key={item.id} onPress={() => navigation.navigate(`${item.route}`)}>
            <ItemList>
              <ItemTitle>{item.label}</ItemTitle>
              <ItemIcon name="arrow-right-s-line" color={theme.colors.text_light} size="28" />
            </ItemList>
          </ItemButton>
        ))}
      </Content>
    </Container>
  );
}
