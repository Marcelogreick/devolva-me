import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps {
  enabled?: boolean;
  onPress?: (pointerInside: boolean) => void;
  inverted?: boolean;
  small?: boolean;
  isBlack?: boolean;
  width?: string;
}

interface TextProps {
  enabled?: boolean;
  inverted?: boolean;
  small?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: ${({ width }) => (width ? width : "100%")};
  background-color: ${({ enabled, theme, isBlack }) =>
    enabled && !isBlack ? theme.COLORS.PRIMARY : theme.COLORS.DARK};
  border-radius: 16px;
  align-items: center;
  margin-top: 10px;
  height: ${({ small }) => (small ? RFValue(27) : RFValue(50))}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${({ small }) => (small ? RFValue(4) : RFValue(6))}px;
`;
export const Text = styled.Text<TextProps>`
  font-size: ${({ small }) => (small ? RFValue(14) : RFValue(16))}px;
  font-weight: bold;
  color: ${({ enabled, theme }) => (enabled ? "#fff" : theme.COLORS.GRAY_500)};
  font-family: ${({ theme, small }) =>
    small ? theme.FONT_FAMILY.REGULAR : theme.FONT_FAMILY.BOLD};
`;
export const Loading = styled.ActivityIndicator`
  margin-left: ${RFValue(10)}px;
`;
