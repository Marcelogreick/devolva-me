import { FlatList, Text } from "react-native";
import LogoPng from "../../assets/logo.png";
import { CollapseAcordion } from "../../components/CollapseAcordion";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";

import {
  ButtonText,
  Container,
  Content,
  ContentButton,
  ContentCheck,
  List,
  Logo,
} from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { CheckBox } from "../../components/CheckBox";
import Toast from "react-native-toast-message";
import { ItemProps } from "../../@types/itemProps";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "../../components/Button";

type Filter = "all" | "entregue" | "nao-entregue";

export function Home() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [itens, setItens] = useState<ItemProps[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const getItens = async () => {
    if (filter === "all") {
      const response = await api.get(`/itens?_page=${page}&_limit=5`);
      const totalCount = response.headers["x-total-count"];
      const totalPages = Math.ceil(totalCount / 5);

      setItens(response.data);
      setTotal(totalPages);
    }

    if (filter === "entregue") {
      const response = await api.get(
        `/itens?entregue=true&_page=${page}&_limit=5`
      );
      const totalCount = response.headers["x-total-count"];
      const totalPages = Math.ceil(totalCount / 5);

      setItens(response.data);
      setTotal(totalPages);
    }

    if (filter === "nao-entregue") {
      const response = await api.get(
        `/itens?entregue=false&_page=${page}&_limit=5`
      );
      const totalCount = response.headers["x-total-count"];
      const totalPages = Math.ceil(totalCount / 5);

      setItens(response.data);
      setTotal(totalPages);
    }
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/itens/${id}`);
    await getItens();
    setPage(1);

    Toast.show({
      type: "success",
      position: "top",
      text1: "Exclusão",
      text2: "Item excluido com sucesso 👋",
    });
  };

  const handleConfirm = async (id: number) => {
    await api.patch(`/itens/${id}`, { entregue: true });
    await getItens();
    setPage(1);

    Toast.show({
      type: "success",
      position: "top",
      text1: "Devolução",
      text2: "Item devolvido com sucesso",
    });
  };

  useEffect(() => {
    getItens();
  }, [page, filter]);

  return (
    <Container>
      <Content>
        <Header />
        <Logo source={LogoPng} />

        <ContentCheck>
          <CheckBox
            label="Todos"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
          />
          <CheckBox
            label="Entregue"
            checked={filter === "entregue"}
            onChange={() => setFilter("entregue")}
          />
          <CheckBox
            label="Não entregue"
            checked={filter === "nao-entregue"}
            onChange={() => setFilter("nao-entregue")}
          />
        </ContentCheck>

        <List
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CollapseAcordion
              title={item.nomeItem}
              loading={false}
              classificacao={item.classificacao}
              emprestadoPara={item.emprestadoPara}
              dataDeDevolucao={item.dataDeDevolucao}
              observacoes={item.observacoes}
              entregue={item.entregue}
              id={item.id}
              onConfirmDelete={handleDelete}
              onConfirmEntrega={handleConfirm}
            />
          )}
        />
      </Content>

      <ContentButton activeOpacity={0.7} onPress={() => navigate("Register")}>
        <ButtonText>+ Cadastrar Novo</ButtonText>
      </ContentButton>

      <Pagination current_page={page} last_page={total} setPage={setPage} />
    </Container>
  );
}
