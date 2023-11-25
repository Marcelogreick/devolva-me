import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ItemProps } from "../../@types/itemProps";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: ${RFValue(120)}px;
  height: ${RFValue(105)}px;
  align-self: center;
`;

export const List = styled(
  FlatList as new (props: FlatListProps<ItemProps>) => FlatList<ItemProps>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${RFValue(20)}px;
  margin-bottom: ${RFValue(15)}px;
`;

export const ContentCheck = styled.View`
  padding-left: ${RFValue(22)}px;
  padding-right: ${RFValue(22)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${RFValue(22)}px;
  padding-right: ${RFValue(22)}px;
  margin-bottom: ${RFValue(20)}px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
