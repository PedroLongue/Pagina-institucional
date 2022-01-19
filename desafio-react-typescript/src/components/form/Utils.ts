export interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  dataDeNascimento: string;
  telefone: string;
  instagram: string;
}

export const InitialValues: IFormikValues = {
  name: "",
  email: "",
  cpf: "",
  dataDeNascimento: "",
  telefone: "",
  instagram: "",
};
