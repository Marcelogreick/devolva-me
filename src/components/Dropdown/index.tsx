import { useCallback, useState } from "react";
import { MenuDivider } from "react-native-material-menu";
import {
  Wrapper,
  AnchorText,
  SelectedWrapper,
  ChevronDown,
  MenuForm,
  Item,
  ItemWrapper,
} from "./styles";

type Option = Record<string, any>;

type Props<T> = {
  options: T[];
  selected?: T | null;
  onChange(option: T): void;
  getLabel(option: T): string;
  label?: string;
  outlined?: boolean;
};

const Dropdown = <T extends Option>({
  options,
  selected,
  onChange,
  getLabel,
  label = "SELECIONE",
  outlined = false,
}: Props<T>) => {
  const [visible, setVisible] = useState(false);

  const handleMenu = useCallback(() => {
    setVisible((old) => !old);
  }, []);

  const onOptionPress = (option: T) => {
    onChange(option);
    handleMenu();
  };

  return (
    <Wrapper outlined={outlined} onPress={handleMenu}>
      <MenuForm
        visible={visible}
        anchor={
          <SelectedWrapper onPress={handleMenu}>
            <AnchorText>
              {selected ? getLabel(selected) : label.toUpperCase()}
            </AnchorText>
            <ChevronDown name="chevron-down" size={20} color="#fff" />
          </SelectedWrapper>
        }
        onRequestClose={handleMenu}
      >
        {options.map((option, index) => (
          <ItemWrapper key={index}>
            <Item
              disabled={option === selected}
              onPress={() => onOptionPress(option)}
            >
              {getLabel(option)}
            </Item>
            <MenuDivider />
          </ItemWrapper>
        ))}
      </MenuForm>
    </Wrapper>
  );
};

export default Dropdown;
