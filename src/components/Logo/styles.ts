import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;

  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.white};
`;
