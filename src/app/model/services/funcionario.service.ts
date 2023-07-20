import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFuncionario } from '../entidades/funcionario';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService {

    private funcionarioURL = environment.apiUrl + "api/pessoa/";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // funcionarioURL = 'https://app-sg.herokuapp.com/api/funcionario/';
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    getFuncionarios(): Observable<IFuncionario[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<IFuncionario[]>(this.funcionarioURL + 'lista');
    }
    genero(): Observable<string[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<string[]>(this.funcionarioURL + 'generos');
    }
    estadoCivil(): Observable<string[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<string[]>(this.funcionarioURL + 'estadoCivil');
    }
    departamento(): Observable<string[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<string[]>(this.funcionarioURL + 'departamentos');
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
    update(funcionario: IFuncionario): Observable<IFuncionario> {
        return this.http.put<IFuncionario>(this.funcionarioURL + 'update', funcionario);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.funcionarioURL + 'delete/${id}');
    }
    getFuncionario(id: number): Observable<IFuncionario> {
        const url = `${this.funcionarioURL}/${id}`;
        return this.http.get<IFuncionario>(url);
    }



    findByTitle(nome: string): Observable<IFuncionario[]> {
        return this.http.get<IFuncionario[]>(this.funcionarioURL + `?nome=${nome}`);
    }


}
