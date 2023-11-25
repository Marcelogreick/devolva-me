import { Platform, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import theme from "../../theme";

export const Container = styled(TextInput).attrs({
  placeholderTextColor: theme.COLORS.GRAY_400,
})`
  padding-left: 10px;
  width: 100%;
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-decoration: none;

  ${Platform.OS === "ios" &&
  css`
    padding-bottom: 5px;
  `}
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: red;
  font-size: ${RFValue(13)}px;
`;
