import {Container, Label} from './styles';

interface InputProps {
  label?: string;
  children: any;
}

export function InputContainer({label, children}: InputProps): JSX.Element {
  return (
    <Container>
      <Label>{label}</Label>
      {children}
    </Container>
  );
}
