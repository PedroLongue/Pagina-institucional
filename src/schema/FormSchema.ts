import * as Yup from "yup";

const cpfRule = /^[\d]{3}[.][\d]{3}[.][\d]{3}[-][\d]{2}$/;
const birthRule =
  /^([0][1-9]|[1-2][\d]|[3][0-1])([/])([0][1-9]|[1][0-2])([/])([1][9][\d][\d]|[2][0]([0-1][\d]|[2][0-2]))$/;
const phoneRule = /^[(][1-9][1-9][)]( |)([\d]{4}|[\d]{5})([-]| |)[\d]{4}$/;

export default Yup.object().shape({
  name: Yup.string().min(3, "Nome inválido").required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  cpf: Yup.string()
    .matches(cpfRule, "CPF inválido")
    .required("Campo obrigatório"),
  birth: Yup.string()
    .matches(birthRule, "Data de nascimento inválida")
    .required("Campo obrigatório"),
  phone: Yup.string()
    .matches(phoneRule, "Número inválido")
    .required("Campo obrigatório"),
  instagram: Yup.string()
    .matches(/^@/, "Perfil inválido, insira o @")
    .required("Campo obrigatório"),
  terms: Yup.boolean().oneOf([true], "Os termos devem ser aceitos"),
});
