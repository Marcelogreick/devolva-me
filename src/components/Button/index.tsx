import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import { Container, Loading, Text } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  onPress: () => void;
  enabled?: boolean;
  inverted?: boolean;
  small?: boolean;
  isBlack?: boolean;
  width?: string;
}

export function Button({
  title,
  onPress,
  enabled = true,
  loading = false,
  small = false,
  isBlack = false,
  width,
  ...rest
}: Props) {
  const { colors } = useTheme();
  return (
    <Container
      enabled={enabled}
      isBlack={isBlack}
      small={small}
      width={width}
      onPress={enabled ? onPress : () => {}}
      activeOpacity={0.8}
      {...rest}
    >
      <Text enabled={enabled} small={small}>
        {title}
      </Text>
      {loading ? <Loading size={"small"} color={colors.white} /> : null}
    </Container>
  );
}
