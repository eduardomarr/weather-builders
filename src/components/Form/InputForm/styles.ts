import styled from 'styled-components/native';

import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Icon from 'react-native-remix-icon';

export const Container = styled.View`
  width: 100%;

  background: ${({ theme }) => theme.colors.background_500};
  flex-direction: row;
  align-items: center;
  height: 56px;
  margin-bottom: 24px;

  border-radius: 8px;
`;

export const CustomInput = styled(TextInput)`
  background: ${({ theme }) => theme.colors.background_500};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(14)}px;

  padding: 8px;
  width: 85%;

  margin-left: 8px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const CustomIcon = styled(Icon)``;

export const IconButton = styled.TouchableOpacity`
  width: 15%;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(14)}px;

  margin: -16px 0px 16px 8px;
`;
