import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFuncionario } from '../entidades/funcionario';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService {
 funcionarioURL = environment.apiUrl +"api/funcionario/"
   // funcionarioURL = 'https://app-sg.herokuapp.com/api/funcionario/';
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    findAll(): Observable<IFuncionario[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<IFuncionario[]>(this.funcionarioURL + 'lista');
    }

    create(funcionario: IFuncionario): Observable<IFuncionario> {
        // const url  = `${baseUrl}/create`;
        return this.http.post<IFuncionario>(this.funcionarioURL + 'create', funcionario);
    }
    mensagem(str: String): void {
        this._sbar.open('${str}', 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }
    update(id: number, funcionario: IFuncionario): Observable<IFuncionario> {
        return this.http.put<IFuncionario>(this.funcionarioURL + 'update/${id}', funcionario);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.funcionarioURL + 'delete/${id}');
    }



    findByTitle(nome: string): Observable<IFuncionario[]> {
        return this.http.get<IFuncionario[]>(this.funcionarioURL + `?nome=${nome}`);
    }
}
