import { IDepartamento } from "./idepartamento";



export interface IFuncionario {   
    
    id?: number;
    nome: string;
    sobrenome: string;
    nascimento:  string;
    cpf: string;
    rg: string;
    mae: String;
    pai: string;
    passaporte: string;
    genero: string;
    estado_civil: string;
    naturalidade: string;
    //admissao: string;
    matricula: String;
    //demissao: string;
    salario: number;
}
