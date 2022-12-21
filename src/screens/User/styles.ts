import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;

  padding: 80px 24px 24px 24px;

  background: ${({ theme }) => theme.colors.background_700};
`;
export const Content = styled.View`
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
`;
