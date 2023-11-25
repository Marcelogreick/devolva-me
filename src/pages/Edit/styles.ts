import { Platform, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 24px;
  text-align: center;
`;

export const ContentButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ContentModalDate = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Exit = styled.TouchableOpacity`
  padding-right: 28px;
  padding-left: 28px;
  padding-top: ${RFValue(18)}px;
  flex-direction: row;
  align-items: center;

  ${Platform.OS === "ios" &&
  css`
    padding-top: ${RFValue(40)}px;
  `}
`;

export const ButtonExit = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

export const TextExit = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-left: ${RFValue(3)}px;
`;

export const DateContainer = styled.View`
  margin-top: ${RFValue(5)}px;
  margin-bottom: ${RFValue(5)}px;
  padding-left: ${RFValue(10)}px;
`;

export const ButtonDate = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 8px;
  height: 33px;
  width: 120px;
`;

export const ButtonDateText = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-right: 5px;
`;
