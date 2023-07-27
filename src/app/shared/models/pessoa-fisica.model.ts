import { Departamento } from "./departamento.model";
import { EstadoCivil } from "./estado-civil.model";
import { Genero } from "./genero.model";
import { Pessoa } from "./pessoa.model";

export interface PessoaFisica extends Pessoa {
     cpf: string;
     rg: string;
     mae: String;
     pai: string;
     passaporte: string;
     genero: string;
     estado_civil: string;
     naturalidade: string;

   


}
