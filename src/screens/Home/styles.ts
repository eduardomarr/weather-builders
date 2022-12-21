import styled from 'styled-components/native';
import Icon from 'react-native-remix-icon';
import { RFValue } from 'react-native-responsive-fontsize';

import LinearGradient from 'react-native-linear-gradient';

export const Gradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  padding: 56px 24px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 24px;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Loading = styled.ActivityIndicator``;

export const LoadingContainer = styled.View`
  margin: 50% 0;
`;

export const HeaderIcon = styled(Icon).attrs({
  size: RFValue(28),
})``;

export const MainCard = styled.View`
  background: ${({ theme }) => theme.colors.background_500};

  padding: 16px;

  border-radius: 16px;
  align-items: center;
  justify-content: flex-start;
`;

export const District = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-align: center;
`;

export const CurrentWeather = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  margin: 16px 0;
  text-align: center;
`;
export const ImageWeather = styled.Image`
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;
`;

export const WeatherDescription = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
`;

export const MaxMinContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MaxMinLabel = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;

  margin: 4px 8px;
`;

export const Spacer = styled.View`
  width: 1px;
  height: 80%;
  background: ${({ theme }) => theme.colors.white};
`;

export const CurrentDate = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin: 32px 0;
  text-align: center;
`;

export const CardGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;

  padding-bottom: 80px;
  height: ${RFValue(450)}px;
`;
