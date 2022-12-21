import styled from 'styled-components/native';

import Icon from 'react-native-remix-icon';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;

  padding-top: 80px;

  background: ${({ theme }) => theme.colors.background_700};
`;
export const Content = styled.View`
  width: 100%;
`;

export const ItemButton = styled.TouchableOpacity`
  width: 100%;
  padding: 0 24px;
  margin-bottom: 8px;
`;

export const ItemList = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

export const ItemTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
`;

export const ItemIcon = styled(Icon)``;
