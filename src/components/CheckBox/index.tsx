import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { CheckBoxContainer, CheckBoxLabel, CheckBoxView } from "./styles";

interface CheckBoxProps {
  label: string;
  onChange: () => void;
  checked: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  onChange,
  checked,
}) => {
  return (
    <CheckBoxContainer onPress={onChange} activeOpacity={1}>
      <CheckBoxView isSelected={checked} onPress={onChange} activeOpacity={0.8}>
        {checked && <Entypo name="check" size={RFValue(10)} color="white" />}
      </CheckBoxView>
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
};
