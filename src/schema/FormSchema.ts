import * as Yup from "yup";


export default Yup.object().shape({
    name: Yup.string().matches(/(?=.{3})/,"O nome precisa ter mais de 2 letras").required("Campo Obrigatorio"),
    email: Yup.string().required("Campo Obrigatorio").email("Email Inválido"),
    cpf: Yup.string().matches(/([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})/,"CPF inválido, tente colocar os pontos e hífen 000.000.000-00").required("Campo Obrigatorio"),
    date: Yup.string().matches(/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/, "Data inválida").required("Campo Obrigatorio"),
    cell: Yup.string().matches(/(\([0-9]{2}\) 9[1-9]{2}[0-9]{6})/, "Número de celular inválido, experimente colocar (ddd) espaço seu numero").required("Campo Obrigatorio"),
    instagram: Yup.string().matches(/@/, "User inválido, tente começar com @").required("Campo Obrigatorio"),
    checkbox: Yup.string().matches(/true/,"É necessário que você aceite os termos").required("É necessário que você aceite os termos"),


});
