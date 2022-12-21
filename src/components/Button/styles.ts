import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  isDisabledStyle?: boolean;
  type: 'primary' | 'secondary';
}

// export const Container = styled(RectButton) <ButtonProps>`
export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;

  background: ${({ theme, type }) => (type === 'primary' ? theme.colors.blue_700 : theme.colors.white)};
  opacity: ${({ isDisabledStyle }) => (isDisabledStyle ? 0.4 : 1)}
  border-radius: 8px;

  align-items: center;
`;

export const Title = styled.Text<ButtonProps>`
  color: ${({ theme, type }) => (type === 'primary' ? theme.colors.white : theme.colors.white)};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};

  padding: 17px;
`;
