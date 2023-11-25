import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  justify-content: space-between;
  align-items: center;
  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;
  padding-left: ${RFValue(20)}px;
  padding-right: ${RFValue(20)}px;
  flex-direction: row;
  border-radius: ${RFValue(10)}px;
  margin-left: ${RFValue(30)}px;
  margin-right: ${RFValue(30)}px;
`;

export const Button = styled.TouchableOpacity``;

export const TextPage = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
