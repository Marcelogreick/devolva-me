import { useTheme } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Container, Greeting, Message, Name, Picture } from "./styles";
import { TouchableOpacity } from "react-native";
import { Power } from "phosphor-react-native";

export function Header() {
  const insets = useSafeAreaInsets();
  const { COLORS } = useTheme();

  const paddingTop = insets.top - 16;

  return (
    <Container style={{ paddingTop }}>
      <Picture
        source={{ uri: "https://avatars.githubusercontent.com/u/47429405?v=4" }}
      />
      <Greeting>
        <Message>Olá</Message>

        <Name>Marcelo greick</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
        <Power size={32} color={COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}
