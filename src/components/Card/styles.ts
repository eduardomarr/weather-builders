import styled from 'styled-components/native';
import Icon from 'react-native-remix-icon';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background_500};

  padding: 4px;

  border-radius: 16px;

  align-items: center;
  justify-content: flex-start;

  flex: 1;
  min-width: 150px;
  max-height: 150px;
  justify-content: center;
  align-items: center;

  margin: 0 4px 16px 4px;
`;

export const CardContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
`;

export const CardValue = styled.Text`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
`;

export const CardIcon = styled(Icon).attrs({
  size: RFValue(24),
})``;
