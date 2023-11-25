import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const schema = Yup.object().shape({
  nomeItem: Yup.string().required("Nome do item obrigatório"),
  emprestadoPara: Yup.string().required("Campo obrigatório"),
  observacoes: Yup.string(),
});

export function form() {
  return useForm({
    resolver: yupResolver(schema),
  });
}
