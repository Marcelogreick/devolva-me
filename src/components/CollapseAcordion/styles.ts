import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IProps {
  isExpanded?: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  margin-bottom: ${RFValue(15)}px;
  border-radius: 8px;
  border-width: 0.7px;
  border-color: #cacaca;
  overflow: hidden;
  width: 100%;
`;

export const Header = styled.TouchableOpacity<IProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${RFValue(13)}px;
  padding-bottom: ${RFValue(13)}px;
  padding-left: ${RFValue(10)}px;
  padding-right: ${RFValue(10)}px;
  border-bottom-width: 0.7px;
  border-color: ${({ isExpanded }) => (isExpanded ? "#cacaca" : "#fff")};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
  padding: ${RFValue(18)}px;
`;

export const Line = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${RFValue(2)}px;
`;

export const TitleLine = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const TextLine = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-transform: capitalize;
  margin-left: ${RFValue(5)}px;
`;

export const ContentButton = styled.View`
  margin-top: ${RFValue(15)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Conclusion = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(15)}px;
`;

export const TextConclusion = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-left: ${RFValue(5)}px;
`;
