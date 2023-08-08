import { Departamento } from "./departamento.model";
import { PessoaFisica } from "./pessoa-fisica.model";

export interface Funcionario extends PessoaFisica {
     admissao: any;
     matricula: string;
     demissao: any;
     salario: number;    
     departamento: Departamento;
   
}


