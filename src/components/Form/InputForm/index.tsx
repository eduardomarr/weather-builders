import React, { useState } from 'react';

import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container, CustomInput, CustomIcon, IconButton, ErrorMessage } from './styles';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  placeholder?: string;
  iconName?: string;
  isPassword?: boolean;
  error?: string;
}

export function InputForm({ control, placeholder, iconName, isPassword = false, error, name, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <Container>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              onChangeText={onChange}
              value={value}
              {...rest}
              secureTextEntry={isPassword ? showPassword : false}
              placeholder={placeholder}
              placeholderTextColor="#fff"
            />
          )}
          name={name}
        />

        {iconName && isPassword === false && <CustomIcon name={iconName} size={20} color="#fff" />}

        {isPassword && (
          <IconButton onPress={() => setShowPassword(!showPassword)}>
            <CustomIcon name={showPassword ? 'eye-off-line' : 'eye-line'} size={20} color="#fff" />
          </IconButton>
        )}
      </Container>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
