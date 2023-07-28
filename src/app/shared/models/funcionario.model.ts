import { Departamento } from "./departamento.model";
import { PessoaFisica } from "./pessoa-fisica.model";

export interface Funcionario extends PessoaFisica {
     admissao: string;
     matricula: string;
     departamento: Departamento;
     demissao: string;
     salario: number;    
   
}