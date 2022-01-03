import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Campo Obrigatório"),
  email: Yup.string().required("Campo Obrigatório").email("E-mail Inválido"),
  cpf: Yup.string().required("Campo Obrigatório"),
  nascimento: Yup.string().required("Campo Obrigatório"),
  numero: Yup.string().required("Campo Obrigatório"),
  instagram: Yup.string().required("Campo Obrigatório").email("@user inválido"),
});
