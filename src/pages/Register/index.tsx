import { useState } from "react";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import {
  ButtonDate,
  ButtonDateText,
  ButtonExit,
  Container,
  Content,
  ContentButton,
  ContentModalDate,
  DateContainer,
  Exit,
  TextExit,
  Title,
} from "./styles";
import { Button } from "../../components/Button";
import { categorias } from "../../contants/categorias";
import Dropdown from "../../components/Dropdown";
import { Header } from "../../components/Header";
import { InputContainer } from "../../components/InputContainer";
import { form } from "./form";
import { ItemProps } from "../../@types/itemProps";
import { generateRandomNumberWithUuid } from "../../utils/ramdonNumber";
import { Alert, Modal } from "react-native";
import { convertDate, convertUSDate, formatDayMonth } from "../../utils/date";
import { useTheme } from "styled-components";
import { Calendar } from "../../components/Calendar";
import { Input } from "../../components/Input";
import api from "../../services/api";
import Toast from "react-native-toast-message";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

export function Register() {
  const { navigate, goBack }: NavigationProp<ParamListBase> = useNavigation();
  const [selectedType, setSelectedType] = useState(categorias[0]);

  const [modalEnd, setModalEnd] = useState(false);
  const [endDate, setEndDate] = useState(convertUSDate(new Date()));

  const { COLORS } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form();

  const onChangeType = (option) => {
    setSelectedType(option);
  };

  function handleDateSelectEnd(day) {
    if (new Date(day).getTime() < new Date().getTime() - 86400000) {
      return Alert.alert(
        "Data inválida",
        "A data de devolução não pode ser menor que a data atual"
      );
    }

    setEndDate(day);
    setModalEnd(false);
  }

  const handleRegister = async (data: ItemProps) => {
    if (selectedType === undefined) {
      return Alert.alert("Erro", "Selecione uma classificação ");
    }

    const dataRequest = {
      id: generateRandomNumberWithUuid(),
      nomeItem: data.nomeItem,
      classificacao: selectedType.name,
      emprestadoPara: data.emprestadoPara,
      dataDeDevolucao: formatDayMonth(endDate),
      observacoes: data.observacoes,
      entregue: false,
    };

    await api.post("/itens", dataRequest);

    Toast.show({
      type: "success",
      position: "top",
      text1: "Cadastro",
      text2: "Item editado com sucesso 👋",
    });

    navigate("Home");
  };

  return (
    <Container>
      <Header />
      <Content>
        <Title>Cadastrar Item</Title>

        <InputContainer label="CLASSIFICAÇÃO">
          <Dropdown
            options={categorias}
            onChange={onChangeType}
            getLabel={(option) => option.name}
            label="CLASSIFICAÇÃO"
            selected={selectedType}
          />
        </InputContainer>

        <InputContainer label="NOME DO PRODUTO">
          <Input
            name="nomeItem"
            control={control}
            placeholder="Digite o nome do produto"
            error={errors.nomeItem && errors.nomeItem.message}
          />
        </InputContainer>

        <InputContainer label="EMPRESTADO PARA">
          <Input
            name="emprestadoPara"
            control={control}
            placeholder="Digite o nome da pessoa"
            error={errors.emprestadoPara && errors.emprestadoPara.message}
          />
        </InputContainer>

        <InputContainer label="OBSERVAÇÕES">
          <Input
            name="observacoes"
            control={control}
            placeholder="Digite o número"
            error={errors.observacoes && errors.observacoes.message}
          />
        </InputContainer>

        <InputContainer label="DATA DE DEVOLUÇÃO">
          <DateContainer>
            <ButtonDate onPress={() => setModalEnd(true)}>
              <ButtonDateText>{convertDate(endDate)}</ButtonDateText>
              <Fontisto name="calendar" size={12} color={COLORS.PRIMARY} />
            </ButtonDate>
          </DateContainer>
        </InputContainer>

        <ContentButton>
          <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
        </ContentButton>

        <ContentButton>
          <Button title="Voltar" onPress={() => goBack()} />
        </ContentButton>
      </Content>

      <Modal visible={modalEnd}>
        <ContentModalDate>
          <Exit activeOpacity={0.7} onPress={() => setModalEnd(false)}>
            <ButtonExit>
              <AntDesign
                name="close"
                size={20}
                color={COLORS.WHITE}
                onPress={() => setModalEnd(false)}
              />
              <TextExit>FECHAR</TextExit>
            </ButtonExit>
          </Exit>

          <Calendar
            dateSelected={endDate}
            onDaySelected={(day) => {
              handleDateSelectEnd(day);
            }}
            onMinToday
          />
        </ContentModalDate>
      </Modal>
    </Container>
  );
}
