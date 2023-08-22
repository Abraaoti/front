import { IPessoa } from "./ipessoa";

export interface IPessoaFisica  extends IPessoa {
     cpf: string;
     rg: string;
     mae: String;
     pai: string;
     passaporte: string;
     genero: string;
     estado_civil: string;
     naturalidade: string;
}
