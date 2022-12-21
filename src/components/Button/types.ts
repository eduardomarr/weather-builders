import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  isDisabledStyle?: boolean;
  type?: 'primary' | 'secondary';
}
