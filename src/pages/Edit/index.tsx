import { useEffect, useState } from "react";
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

export function Edit({ route }) {
  const { navigate, goBack }: NavigationProp<ParamListBase> = useNavigation();
  const [selectedType, setSelectedType] = useState(categorias[0]);
  const { item } = route.params;

  const [modalEnd, setModalEnd] = useState(false);
  const [endDate, setEndDate] = useState(convertUSDate(new Date()));

  const { COLORS } = useTheme();

  const {
    control,
    handleSubmit,
    setValue,
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

  const handleUpdate = async (data: ItemProps) => {
    if (selectedType === undefined) {
      return Alert.alert("Erro", "Selecione uma classificação ");
    }

    const dataRequest = {
      id: item.id,
      nomeItem: data.nomeItem,
      classificacao: selectedType.name,
      emprestadoPara: data.emprestadoPara,
      dataDeDevolucao: formatDayMonth(endDate),
      observacoes: data.observacoes,
      entregue: false,
    };

    await api.put(`/itens/${item.id}`, dataRequest);

    Toast.show({
      type: "success",
      position: "top",
      text1: "Cadastro",
      text2: "Item cadastrado com sucesso 👋",
    });

    navigate("Home");
  };

  useEffect(() => {
    setSelectedType(
      categorias.find((item) => item.name === route.params.item.classificacao)
    );

    setEndDate(convertUSDate(item.dataDeDevolucao));
    setValue("nomeItem", item.nomeItem);
    setValue("emprestadoPara", item.emprestadoPara);
    setValue("observacoes", item.observacoes);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Editar Item</Title>

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
          <Button title="Editar" onPress={handleSubmit(handleUpdate)} />
        </ContentButton>

        <ContentButton>
          <Button title="Cancelar" onPress={() => goBack()} />
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
