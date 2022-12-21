import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'styled-components';
import { RootStackParamList } from '../../routes/app.stack.routes';

import { Container, Content, ItemList, ItemTitle, ItemButton, ItemIcon } from './styles';

export function Settings() {
  const theme = useTheme();
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container>
      <Content>
        <ItemButton onPress={() => navigate('About')}>
          <ItemList>
            <ItemTitle>Sobre</ItemTitle>
            <ItemIcon name="arrow-right-s-line" color={theme.colors.text_light} size="28" />
          </ItemList>
        </ItemButton>
      </Content>
    </Container>
  );
}
