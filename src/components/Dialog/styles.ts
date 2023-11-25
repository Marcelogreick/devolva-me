import { StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../theme";

export const ButtonDialog = styled(TouchableOpacity)`
  margin-left: ${RFValue(16)}px;
`;

export const TextButtonDialog = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const styleDialog = StyleSheet.create({
  container: {
    marginLeft: RFValue(40),
    marginRight: RFValue(40),
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingBottom: RFValue(15),
    paddingRight: RFValue(5),
  },
  title: {
    fontSize: RFValue(17),
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.GRAY_700,
    marginBottom: RFValue(12),
  },
  text: {
    fontSize: RFValue(15),
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: "#000",
  },
});
