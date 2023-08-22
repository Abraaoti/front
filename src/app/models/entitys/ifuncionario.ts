import { IDepartamento } from "./idepartamento";
import { IPessoaFisica } from "./ipessoa-fisica";

export interface IFuncionario extends IPessoaFisica {
     admissao: any;
     matricula: string;
     demissao: any;
     salario: number;    
     departamento: IDepartamento;
}
