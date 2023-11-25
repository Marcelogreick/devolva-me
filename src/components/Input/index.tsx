import {Control, Controller} from 'react-hook-form';
import {KeyboardTypeOptions, ReturnKeyType} from 'react-native';

import {Container, Error} from './styles';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  ref?: any;
  error?: any;
  control: Control | any;
  returnKeyType?: ReturnKeyType;
  name: string;
  maxLength?: number;
  onSubmitEditing?: () => void;
  multiline?: boolean;
  numberOfLines?: number;
}

export function Input({
  placeholder,
  secureTextEntry,
  keyboardType,
  error,
  control,
  name,
  maxLength,
  ...rest
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <>
          <Container
            placeholder={placeholder}
            autoComplete="off"
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            returnKeyType="done"
            autoCapitalize="none"
            value={value}
            maxLength={maxLength}
            {...rest}
          />
          {error && <Error>{error}</Error>}
        </>
      )}
    />
  );
}
