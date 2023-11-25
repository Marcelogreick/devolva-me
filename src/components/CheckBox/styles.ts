import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface CheckBoxViewProps {
  isSelected: boolean;
}

export const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxView = styled.TouchableOpacity<CheckBoxViewProps>`
  height: ${RFValue(17)}px;
  width: ${RFValue(17)}px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.COLORS.PRIMARY : "transparent"};
`;

export const CheckBoxLabel = styled.Text`
  margin-left: 8px;
`;
