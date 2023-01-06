import { ViewProps } from 'react-native';

export interface CardProps extends ViewProps{
  title: string;
  icon: string;
  value: number | string;
}
