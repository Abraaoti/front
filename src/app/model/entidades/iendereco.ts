import { IFuncionario } from "./funcionario";

export interface IEndereco {
    id?: number;
    uf: string;
    cidade: string;
    bairro: string;
    rua: string;
    cep: string;
    numero: String;
    complemento: string;   
    pessoa: IFuncionario;
    
    
}
