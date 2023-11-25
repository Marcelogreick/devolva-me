import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  Conclusion,
  Container,
  Content,
  ContentButton,
  Header,
  Line,
  TextConclusion,
  TextLine,
  Title,
  TitleLine,
} from "./styles";
import { useTheme } from "styled-components";
import If from "../If";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface AcordionProps {
  title: string;
  children?: React.ReactNode;
  loading?: boolean;
  classificacao: string;
  emprestadoPara: string;
  dataDeDevolucao: string;
  observacoes: string;
  entregue: boolean;
  id: number;
  onConfirmDelete: (id: number) => void;
  onConfirmEntrega: (id: number) => void;
  onFinished?: () => void;
}
export function CollapseAcordion({
  title,
  children,
  loading,
  classificacao,
  emprestadoPara,
  dataDeDevolucao,
  observacoes,
  entregue,
  onConfirmDelete,
  onConfirmEntrega,
  id,
  onFinished,
}: AcordionProps) {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showDialogEntrega, setShowDialogEntrega] = useState(false);
  const { COLORS } = useTheme();

  const toggleAccordion = (value: boolean) => {
    setExpanded(!value);
  };

  return (
    <Container>
      <Header
        onPress={() => toggleAccordion(expanded)}
        activeOpacity={0.8}
        isExpanded={expanded}
      >
        <Title>{title}</Title>
        <Entypo
          name={expanded ? "chevron-up" : "chevron-down"}
          color={COLORS.GRAY_400}
          size={25}
        />
      </Header>

      {expanded && (
        <Content>
          <Line>
            <TitleLine>Classificação:</TitleLine>
            <TextLine>{classificacao}</TextLine>
          </Line>

          <Line>
            <TitleLine>Emprestado para:</TitleLine>
            <TextLine>{emprestadoPara}</TextLine>
          </Line>

          <Line>
            <TitleLine>Data de devolução:</TitleLine>
            <TextLine>{dataDeDevolucao}</TextLine>
          </Line>

          {observacoes !== "" && (
            <Line>
              <TitleLine>Observações:</TitleLine>
              <TextLine>{observacoes}</TextLine>
            </Line>
          )}

          <If condition={entregue === false}>
            <ContentButton>
              <Button
                title="Excluir"
                onPress={() => setShowDialog(true)}
                small
                width="40%"
              />
              <Button
                title="Editar"
                onPress={() =>
                  navigate("Edit", {
                    item: {
                      id: id,
                      nomeItem: title,
                      classificacao: classificacao,
                      emprestadoPara: emprestadoPara,
                      dataDeDevolucao: dataDeDevolucao,
                      observacoes: observacoes,
                      entregue: entregue,
                    },
                  })
                }
                small
                width="40%"
              />
            </ContentButton>

            <Button
              title="Confirmar Entrega"
              onPress={() => setShowDialogEntrega(true)}
              small
              width="100%"
              style={{ alignSelf: "center", marginTop: 15 }}
            />
          </If>

          <If condition={entregue === true}>
            <Conclusion>
              <Entypo name="check" size={30} color="green" />
              <TextConclusion>Item entregue</TextConclusion>
            </Conclusion>
          </If>
        </Content>
      )}

      <Dialog
        visibleDialog={showDialog}
        title="Confirmação"
        paragraph={`Deseja realmente excluir o item ${title}?`}
        confirmText="Confirmar"
        onConfirm={() => (
          onConfirmDelete(id), onFinished(), setShowDialog(false)
        )}
        onCancel={() => {
          setShowDialog(false);
        }}
      />

      <Dialog
        visibleDialog={showDialogEntrega}
        title="Confirmação"
        paragraph={`Deseja realmente confirmar a entrega do item ${title}?`}
        confirmText="Confirmar"
        onConfirm={() => (
          onConfirmEntrega(id), onFinished(), setShowDialogEntrega(false)
        )}
        onCancel={() => {
          setShowDialogEntrega(false);
        }}
      />
    </Container>
  );
}
