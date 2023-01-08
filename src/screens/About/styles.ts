import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 80px 32px;
  background: ${({ theme }) => theme.colors.background_700};
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const Version = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  margin-bottom: 32px;
`;
